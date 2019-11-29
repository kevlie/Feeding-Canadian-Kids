"use strict";

var express = require("express");
var courierRouter = express.Router();
const sql = require("../db.js");

courierRouter.post("/", function(req, res) {
  const email = req.body.email;
  console.log("hey");
  console.log(email);
  let query1 =
    "SELECT approval_status FROM courier_review WHERE applicant_email = ?";
  sql.query(query1, email, function(err, results) {
    console.log(results);
    res.json(results);
  });
  // let query1 = "SELECT program_id FROM program_partners WHERE email = ?";
  // sql.query(query1, "fake@mail.com", function(err, results) {
  //   let program_id = JSON.parse(JSON.stringify(results))[0].program_id;
  //   let query2 = "SELECT restaurant_id FROM pairings WHERE program_id = ?";
  //   sql.query(query2, program_id, function(err, results) {
  //     let restaurant_ids = JSON.parse(JSON.stringify(results));
  //     let data = [];
  //     for (let i = 0; i < restaurant_ids.length; i++) {
  //       data.push(restaurant_ids[i].restaurant_id);
  //     }
  //     let queryData = [data];
  //     query3 =
  //       "SELECT name, address, contact_email, phone FROM restaurant_partners WHERE restaurant_id IN (?)";
  //     sql.query(query3, queryData, function(err, results) {
  //       console.log(results);
  //       res.status(200).json(results);
  //     });
  //   });
  // });
});

module.exports = courierRouter;
