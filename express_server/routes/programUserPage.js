var express = require("express");
var router = express.Router();
const sql = require("../db.js");

router.get("/name", function(req, res) {
  let email = req.session.email;
  let query2 = "SELECT name FROM program_partners WHERE email = ?";
  if (email) {
    sql.query(query2, email, (err, results) => {
        res.status(200).json(results);
    });
  }
});

module.exports = router;
