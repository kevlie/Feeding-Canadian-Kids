var express = require("express");
var router = express.Router();
const sql = require("../db.js");

router.get("/:id", function(req, res) {
	query = "SELECT * FROM restaurant_review rr, restaurant_partners rp WHERE rr.restaurant_id = rp.restaurant_id AND rr.restaurant_id = " + req.params.id;
	sql.query(query, function(err, results) {
		console.log(results);
		res.json(results)
	})
})

router.post("/:id/approve", function(req, res) {
	query1 = "UPDATE restaurant_review SET approval_status = " + 1 + " WHERE restaurant_id = " + req.params.id;
	sql.query(query1, function(err, results) {
		console.log(err);
	})
	query2 = "UPDATE restaurant_partners SET active_status = " + 1 + " WHERE restaurant_id = " + req.params.id;
	sql.query(query2, function(err, results) {
		console.log(err);
	})
})

router.post("/:id/reject", function(req, res) {
	console.log("DONE");
	query = "DELETE FROM restaurant_review WHERE restaurant_id = " + req.params.id;
	sql.query(query, function(err, results) {
		query2 = "DELETE FROM restaurant_partners WHERE restaurant_id = " + req.params.id;	
		sql.query(query2)
	})
})

module.exports = router;