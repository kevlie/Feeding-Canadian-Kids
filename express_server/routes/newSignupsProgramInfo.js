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
	query = "UPDATE program_review SET approval_status = " + 1 + " WHERE program_id = " + req.params.id;
	sql.query(query, function(err, results) {
		console.log(err);
	})
})

router.post("/:id/reject", function(req, res) {
	console.log("DONE");
	query = "DELETE FROM program_review WHERE program_id = " + req.params.id;
	sql.query(query)
})

module.exports = router;