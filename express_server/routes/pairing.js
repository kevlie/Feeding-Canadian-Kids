var express = require('express');
var router = express.Router();
const sql = require('../db.js');

router.get("/", function(req, res) {
	let partners = []
	let programPartners = []
	let restaurantPartners = []
	let restaurantsPairedWith = []
	let programsPairedWith = []

	query1 = "SELECT program_id, name, address FROM program_partners pp WHERE active_status = 1";
	sql.query(query1, function(err, results) {
		programPartners = results
	})

	query2 = "SELECT restaurant_id, name, address FROM restaurant_partners rp WHERE active_status = 1";
	sql.query(query2, function(err, results) {
		restaurantPartners = results
	})

	query3 = "SELECT program_id, count(restaurant_id) AS numRestaurantsPairedWith FROM pairings GROUP BY program_id";
	sql.query(query3, function(err, results) {
		restaurantsPairedWith = results
	})

	query4 = "SELECT restaurant_id, count(program_id) AS numProgramsPairedWith FROM pairings GROUP BY restaurant_id";
	sql.query(query4, function(err, results) {
		programsPairedWith = results
		partners.push(programPartners)
		partners.push(restaurantPartners)
		partners.push(restaurantsPairedWith)
		partners.push(programsPairedWith)
		res.json(partners)
	})
})

router.post("/:programId/:restaurantId", function(req, res) {
	progId = parseInt(req.params.programId)
	restId = parseInt(req.params.restaurantId)
	query1 = "SELECT program_id, restaurant_id FROM pairings"
	var exists = false
	sql.query(query1, function(err, results) {
		for (var i = 0; i < results.length; i++) {
			if (results[i]["program_id"] == progId && results[i]["restaurant_id"] == restId) {
				exists = true
				break
			}
		}
		if (!exists) {
			query2 = "INSERT INTO pairings (program_id, restaurant_id, last_day, linear_distance, monday_time, tuesday_time, wednesday_time, thursday_time, friday_time, monday_meals, tuesday_meals, wednesday_meals, thursday_meals, friday_meals) VALUES (" + progId + ", " + restId + ", null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)";
			sql.query(query2, function(err, results) {
				console.log(err);
			})
		}
	})
})

module.exports = router;