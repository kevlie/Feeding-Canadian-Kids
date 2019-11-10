var express = require("express");
var router = express.Router();
//const sql = require("../db.js");

router.get("/", function(req, res) {
	let partners = []
	let programPartners = []
	let restaurantPartners = []

	query1 = "SELECT * FROM program_review WHERE approval_status=0";
	sql.query(query1, function(err, results) {
		//programPartners = results
		programPartners = [{}, {}, {}, {}, {}, {}]
	})

	query2 = "SELECT * FROM restaurant_review WHERE approval_status=0";
	sql.query(query2, function(err, results) {
		//restaurantPartners = results
		restaurantPartners = [{}, {}, {}, {}, {}, {}]
		partners.push(programPartners)
		partners.push(restaurantPartners)
		partners.push([0, 1, 2, 3, 4, 5])
		console.log(partners)
		res.json(partners)
	})
})

module.exports = router;