var express = require("express");
var router = express.Router();

router.get("/:id", function(req, res) {
	console.log("program")
})

module.exports = router;