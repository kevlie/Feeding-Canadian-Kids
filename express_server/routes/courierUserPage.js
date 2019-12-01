"use strict";

var express = require("express");
var courierRouter = express.Router();
const sql = require("../db.js");

// courierRouter.post("/", function(req, res) {
//   console.log(req.session.email);
//   const email = req.body.email;
//   let query1 =
//     "SELECT approval_status FROM courier_review WHERE applicant_email = ?";
//   sql.query(query1, email, function(err, results) {
//     res.json(results);
//   });
// });
courierRouter.get("/", function(req, res) {
  const email = req.session.email;
  console.log(req.session.email);
  // const email = req.body.email;
  let query1 =
    "SELECT approval_status FROM courier_review WHERE applicant_email = ?";
  sql.query(query1, email, function(err, results) {
    res.json(results);
    // console.log(results);
  });
});

courierRouter.get("/name", function(req, res) {
  let email = req.session.email;
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

courierRouter.get("/restaurants", function(req, res) {
  let email = req.session.email;
  let query1 = "SELECT courier_id FROM courier_partners WHERE email = ?";
  sql.query(query1, email, function(err, results) {
    let courier_id = JSON.parse(JSON.stringify(results))[0].courier_id;
    let query2 =
      "SELECT restaurant_id FROM courier_restaurant_pairings WHERE courier_id = ?";
    sql.query(query2, courier_id, function(err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      let restaurant_ids = JSON.parse(JSON.stringify(results));
      let data = [];
      for (let i = 0; i < restaurant_ids.length; i++) {
        data.push(restaurant_ids[i].restaurant_id);
      }
      let queryData = [data];
      let query3 =
        "SELECT name, address, contact_email, phone FROM restaurant_partners WHERE restaurant_id IN (?)";
      sql.query(query3, queryData, function(err, results) {
        if (results === undefined) {
          res.status(500).send(err);
        } else {
          res.status(200).json(results);
        }
      });
    });
  });
});

courierRouter.get("/isCourier", (req, res) => {
  if (
    req.session.loggedin === undefined ||
    req.session.partnerType !== "courier"
  ) {
    //console.log("not admin");
    res.status(500).send();
  } else {
    res.json(true);
  }
});
module.exports = courierRouter;
