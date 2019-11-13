var express = require("express");
var router = express.Router();
const sql = require("../db.js");
// const bodyParser = require('body-parser');
// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({ extended: true }));

router.get("/:id", function(req, res) {
	console.log(req.params.id)
	query1 = "SELECT * FROM program_review pr, program_partners pp WHERE pr.program_id = pp.program_id AND pr.program_id = " + req.params.id;
	sql.query(query1, function(err, results) {
		console.log(results);
		res.json(results)
	})
})

module.exports = router;