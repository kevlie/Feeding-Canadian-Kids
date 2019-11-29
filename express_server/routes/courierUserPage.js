"use strict";

var express = require("express");
var courierRouter = express.Router();
const sql = require("../db.js");

courierRouter.post("/", function(req, res) {
  const email = req.body.email;
  console.log(email);
  let query1 =
    "SELECT approval_status FROM courier_review WHERE applicant_email = ?";
  sql.query(query1, email, function(err, results) {
    res.json(results);
  });
});

module.exports = courierRouter;
