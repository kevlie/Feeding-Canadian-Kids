var express = require("express");
var adminRouter = express.Router();
const sql = require("../db.js");

adminRouter.get("/", function(req, res) {
  var values = [];

  query1 =
    "SELECT count(program_id) as count FROM program_review WHERE approval_status = 1";
  sql.query(query1, function(err, results) {
    let numPrograms = results[0]["count"];
    let obj = { programs: numPrograms };
    values.push(obj);
  });

  query2 =
    "SELECT count(restaurant_id) as count FROM restaurant_review WHERE approval_status = 1";
  sql.query(query2, function(err, results) {
    let numRestaurants = results[0]["count"];
    let obj2 = { restaurants: numRestaurants };
    values.push(obj2);
  });

  query3 =
    "SELECT count(program_id) as count FROM program_review WHERE approval_status=0";
  sql.query(query3, function(err, results) {
    let numNewPrograms = results[0]["count"];
    let obj3 = { newPrograms: numNewPrograms };
    values.push(obj3);
  });

  query4 =
    "SELECT count(restaurant_id) as count FROM restaurant_review WHERE approval_status=0";
  sql.query(query4, function(err, results) {
    let numNewRestaurants = results[0]["count"];
    let obj4 = { newRestaurants: numNewRestaurants };
    values.push(obj4);
    // res.json(values);
  });

  query5 =
    "SELECT count(courier_id) as count FROM courier_review WHERE approval_status=0";
  sql.query(query5, function(err, results) {
    let numNewCouriers = results[0]["count"];
    let obj5 = { newCouriers: numNewCouriers };
    values.push(obj5);
  });

  query6 =
    "SELECT count(courier_id) as count FROM courier_review WHERE approval_status=1";
  sql.query(query6, function(err, results) {
    let numCouriers = results[0]["count"];
    let obj6 = { couriers: numCouriers };
    values.push(obj6);
    res.json(values);
  });
});

adminRouter.get("/isAdmin", function(req, res) {
  console.log(req.session.isAdmin);

  if (req.session.loggedin === undefined || req.session.isAdmin !== true) {
    console.log("not admin");
    res.status(500).send();
  } else {
    res.json(req.session.isAdmin);
  }
});
module.exports = adminRouter;
