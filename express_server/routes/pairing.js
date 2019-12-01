var express = require('express');
var router = express.Router();
const sql = require('../db.js');

//getting partners info
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

//performing pairing
// router.post("/:programId/:restaurantId", function(req, res) {
// 	progId = parseInt(req.params.programId)
// 	restId = parseInt(req.params.restaurantId)
// 	query1 = "SELECT program_id, restaurant_id FROM pairings"
// 	var exists = false
// 	sql.query(query1, function(err, results) {
// 		for (var i = 0; i < results.length; i++) {
// 			if (results[i]["program_id"] == progId && results[i]["restaurant_id"] == restId) {
// 				console.log("HErE");
// 				exists = true
// 				break
// 			}
// 		}
// 		if (!exists) {
// 			console.log(progId);
// 			console.log(restId);
// 			query2 = "INSERT INTO pairings (program_id, restaurant_id, last_day, linear_distance, monday_time, tuesday_time, wednesday_time, thursday_time, friday_time, monday_meals, tuesday_meals, wednesday_meals, thursday_meals, friday_meals) VALUES (" + progId + ", " + restId + ", null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)";
// 			sql.query(query2, function(err, results) {
// 				//console.log(err);
// 			})
// 		}
// 	})
// })

router.post("/program-to-restaurants", function(req, res) {
	console.log(req.body);
	const progId = parseInt(req.body[0])
	query1 = "SELECT program_id, restaurant_id FROM pairings"
	sql.query(query1, function(err, results) {
		for (var i = 0; i < results.length; i++) {
			if (results[i]["program_id"] == progId && req.body[1][results[i]["restaurant_id"]] == true) {
				req.body[1][results[i]["restaurant_id"]] = false
			}
		}
		for (restId in req.body[1]) {
			if (req.body[1][restId] == true) {
				query2 = "INSERT INTO pairings (program_id, restaurant_id, last_day, linear_distance, monday_time, tuesday_time, wednesday_time, thursday_time, friday_time, monday_meals, tuesday_meals, wednesday_meals, thursday_meals, friday_meals) VALUES (" + progId + ", " + restId + ", null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)";
				sql.query(query2, function(err, results) {
					//console.log(err);
				})
			}
		}
	})
})

router.post("/restaurant-to-programs", function(req, res) {
	console.log(req.body);
	const restId = parseInt(req.body[0])
	query1 = "SELECT program_id, restaurant_id FROM pairings"
	sql.query(query1, function(err, results) {
		for (var i = 0; i < results.length; i++) {
			if (results[i]["restaurant_id"] == restId && req.body[1][results[i]["program_id"]] == true) {
				req.body[1][results[i]["program_id"]] = false
			}
		}
		for (progId in req.body[1]) {
			if (req.body[1][progId] == true) {
				query2 = "INSERT INTO pairings (program_id, restaurant_id, last_day, linear_distance, monday_time, tuesday_time, wednesday_time, thursday_time, friday_time, monday_meals, tuesday_meals, wednesday_meals, thursday_meals, friday_meals) VALUES (" + progId + ", " + restId + ", null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)";
				sql.query(query2, function(err, results) {
					//console.log(err);
				})
			}
		}
	})
})

//getting restaurants programId currently paired with
router.get("/current-restaurants/:programId", function(req, res) {
	restaurantsCurrentlyPairedWith = []
	query = "SELECT p.program_id, rp.name FROM pairings p, restaurant_partners rp WHERE p.restaurant_id = rp.restaurant_id and p.program_id = " + req.params.programId;
	sql.query(query, function(err, results) {
		restaurantsCurrentlyPairedWith.push(results)
		console.log(results)
		console.log(restaurantsCurrentlyPairedWith);
		res.json(restaurantsCurrentlyPairedWith)
	})
})

//getting programs restaurantId currently paired with
router.get("/current-programs/:restaurantId", function(req, res) {
	programsCurrentlyPairedWith = []
	query = "SELECT p.restaurant_id, pp.name FROM pairings p, program_partners pp WHERE p.program_id = pp.program_id and p.restaurant_id = " + req.params.restaurantId;
	sql.query(query, function(err, results) {
		programsCurrentlyPairedWith.push(results)
		console.log(results)
		console.log(programsCurrentlyPairedWith)
		res.json(programsCurrentlyPairedWith)
	})
})

module.exports = router;