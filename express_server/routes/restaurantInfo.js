var express = require("express");
var router = express.Router();
const sql = require("../db.js");

router.get("/:id", function(req, res) {
	console.log(req.params.id)
	query1 = "SELECT * FROM restaurant_partners WHERE restaurant_id = " + req.params.id;
	sql.query(query1, function(err, results) {
		console.log(results);
		res.json(results)
	})
})

module.exports = router;