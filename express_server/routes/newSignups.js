var express = require("express");
var router = express.Router();
const sql = require("../db.js");

router.get("/", function(req, res) {
	let partners = []
	let programPartners = []
	let restaurantPartners = []

	query1 = "SELECT pp.program_id, pp.name, pp.address FROM program_review pr, program_partners pp WHERE approval_status = 0 AND pr.program_id = pp.program_id";
	sql.query(query1, function(err, results) {
		programPartners = results
	})

	query2 = "SELECT rp.restaurant_id, rp.name, rp.address FROM restaurant_review rr, restaurant_partners rp WHERE approval_status = 0 AND rr.restaurant_id = rp.restaurant_id";
	sql.query(query2, function(err, results) {
		restaurantPartners = results
		partners.push(programPartners)
		partners.push(restaurantPartners)
		res.json(partners)
	})
})

module.exports = router;