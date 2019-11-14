var express = require("express");
var router = express.Router();
const sql = require("../db.js");
// const bodyParser = require('body-parser');
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

router.get("/:id", function(req, res) {
	query = "SELECT * FROM restaurant_review rr, restaurant_partners rp WHERE rr.restaurant_id = rp.restaurant_id AND rr.restaurant_id = " + req.params.id;
	sql.query(query, function(err, results) {
		console.log(results);
		res.json(results)
	})
})

router.post("/:id/approve", function(req, res) {
	query = "UPDATE restaurant_review SET approval_status = " + 1 + " WHERE restaurant_id = " + req.params.id;
	sql.query(query, function(err, results) {
		console.log(err);
	})
})

router.post("/:id/reject", function(req, res) {
	console.log("DONE");
	query = "DELETE FROM restaurant_review WHERE restaurant_id = " + req.params.id;
	sql.query(query)
})

module.exports = router;