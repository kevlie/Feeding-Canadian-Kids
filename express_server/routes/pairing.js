var express = require('express');
var router = express.Router();
const sql = require('../db.js');

router.get("/", function(req, res) {
	let partners = []
	let programPartners = []
	let restaurantPartners = []

	query1 = "SELECT program_id, name, address FROM program_partners pp WHERE active_status = 1";
	sql.query(query1, function(err, results) {
		programPartners = results
	})

	query2 = "SELECT restaurant_id, name, address FROM restaurant_partners rp WHERE active_status = 1";
	sql.query(query2, function(err, results) {
		restaurantPartners = results
		partners.push(programPartners)
		partners.push(restaurantPartners)
		res.json(partners)
	})
})

module.exports = router;