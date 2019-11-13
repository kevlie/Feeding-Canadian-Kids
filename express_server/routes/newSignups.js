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
		//programPartners = [{}, {}, {}, {}, {}, {}]
	})

	query2 = "SELECT rp.program_id, rp.name, rp.address FROM restaurant_review rr, restaurant_partners rp WHERE approval_status = 0 AND rr.program_id = rp.program_id";
	sql.query(query2, function(err, results) {
		restaurantPartners = results
		//restaurantPartners = [{}, {}, {}, {}, {}, {}]
		partners.push(programPartners)
		partners.push(restaurantPartners)
		//partners.push([0, 1, 2, 3, 4, 5])
		res.json(partners)
	})
})

module.exports = router;