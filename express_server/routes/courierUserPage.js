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

courierRouter.post("/name", function(req, res) {
  let email = req.body.email;
  let query2 =
    "SELECT name FROM courier_partners WHERE courier_partners.email = ?";
  if (email) {
    sql.query(query2, email, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.length >= 0) {
        res.json(results);
      }
    });
  }
});
module.exports = courierRouter;
