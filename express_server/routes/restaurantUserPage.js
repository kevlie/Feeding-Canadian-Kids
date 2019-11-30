"use strict";

var express = require("express");
var restaurantRouter = express.Router();
const sql = require("../db.js");

restaurantRouter.post("/orders", function(req, res) {
  let email = req.body.restaurantEmail;
  //console.log(email)
  let query1 =
    "SELECT pr.name, pr.address, pr.dietary_restrictions, monday_meals, monday_time, " +
    "tuesday_meals, tuesday_time, wednesday_meals, wednesday_time, " +
    "thursday_meals, thursday_time, friday_meals, friday_time " +
    "FROM restaurant_partners r INNER JOIN pairings p ON r.restaurant_id = p.restaurant_id " +
    "INNER JOIN program_partners pr ON pr.program_id = p.program_id WHERE r.contact_email = ?";
  if (email) {
    sql.query(query1, [email], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.length >= 0) {
        //may have multiple rows now
        res.status(200).send(results); //results is an array where each object is a row from the query
      }
    });
  }
});

restaurantRouter.post("/name", function(req, res) {
  console.log(req.session.email);
  let email = req.body.restaurantEmail;
  let query1 =
    "SELECT name FROM restaurant_partners WHERE restaurant_partners.contact_email = ?";
  if (email) {
    sql.query(query1, [email], (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.length >= 0) {
        res.status(200).send(results);
      }
    });
  }
});

module.exports = restaurantRouter;
