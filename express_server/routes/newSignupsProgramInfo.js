var express = require("express");
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/:id", function(req, res) {
	console.log(req.params.id)
})

module.exports = router;