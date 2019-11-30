var express = require("express");
var router = express.Router();
const sql = require("../db.js");
// const bodyParser = require('body-parser');
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

router.get("/:id", function(req, res) {
	query = "SELECT * FROM program_review pr, program_partners pp WHERE pr.program_id = pp.program_id AND pr.program_id = " + req.params.id;
	sql.query(query, function(err, results) {
		res.json(results)
	})
})

router.post("/:id/approve", function(req, res) {
	query1 = "UPDATE program_review SET approval_status = " + 1 + " WHERE program_id = " + req.params.id;
	sql.query(query1, function(err, results) {
		console.log(err);
	})
	query2 = "UPDATE program_partners SET active_status = " + 1 + " WHERE program_id = " + req.params.id;
	sql.query(query2, function(err, results) {
		console.log(err);
	})
})

router.post("/:id/reject", function(req, res) {
	query1 = "DELETE FROM program_review WHERE program_id = " + req.params.id;
	sql.query(query1, function(err, results) {
		query2 = "DELETE FROM program_partners WHERE program_id = " + req.params.id;
		sql.query(query2)
	})
})

module.exports = router;