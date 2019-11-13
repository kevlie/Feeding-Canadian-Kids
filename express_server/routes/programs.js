var express = require("express");
var router = express.Router();
const sql = require("../db.js");

router.get("/", function(req, res) {
	query1 = "SELECT program_id, name, address FROM program_partners WHERE active_status = 0";
	sql.query(query1, function(err, results) {
		console.log(results)
		res.json(results)
	})
})

module.exports = router;