var express = require("express");
var router = express.Router();
const sql = require("../db.js");

router.get("/:id", function(req, res) {
	query = "SELECT * FROM courier_review cr, courier_partners cp WHERE cr.courier_id = cp.courier_id AND cr.courier_id = " + req.params.id;
	sql.query(query, function(err, results) {
		res.json(results)
	})
})

router.post("/:id/approve", function(req, res) {
	query1 = "UPDATE courier_review SET approval_status = " + 1 + " WHERE courier_id = " + req.params.id;
	sql.query(query1, function(err, results) {
		console.log(err);
	})
	query2 = "UPDATE courier_partners SET active_status = " + 1 + " WHERE courier_id = " + req.params.id;
	sql.query(query2, function(err, results) {
		console.log(err);
	})
})

router.post("/:id/reject", function(req, res) {
	query1 = "DELETE FROM courier_review WHERE courier_id = " + req.params.id;
	sql.query(query1, function(err, results) {
		query2 = "DELETE FROM courier_partners WHERE courier_id = " + req.params.id;
		sql.query(query2)
	})
})

module.exports = router;