"use strict";

var express = require("express");
var courierApplicationRouter = express.Router();
const sql = require("../db.js");

courierApplicationRouter.post("/", function(req, res) {
  // general info
  let serviceArea = req.body.area;
  let driverInformation = req.body.driverInformation;
  let vehicleDescription = req.body.vehicleDescription;
  let { monday, tuesday, wednesday, thursday, friday } = req.body.daysAvailable;
  let passwordHash = req.body.passwordHash;

  // application specific info
  let discoveryInfo = req.body.discoveryInfo;
  let extraInfo = req.body.extraInfo;
  let email = req.body.email;
  let applicantName = req.body.applicantName;

  let queryGeneral =
    "INSERT INTO `courier_partners` (name, email, area_service, driver_information, vehicle_description, password_hash, monday, tuesday, wednesday, thursday, friday) VALUES ('" +
    applicantName +
    "', '" +
    email +
    "', '" +
    serviceArea +
    "', '" +
    driverInformation +
    "', '" +
    vehicleDescription +
    "', '" +
    passwordHash +
    "', '" +
    monday +
    "', '" +
    tuesday +
    "', '" +
    wednesday +
    "', '" +
    thursday +
    "', '" +
    friday +
    "')";

  sql.query(queryGeneral, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      sql.query(
        "SELECT * FROM `courier_partners` WHERE email = " + "'" + email + "'",
        function(err, result, fields) {
          if (err) throw err;
          console.log(result);
          let courierId = result[0].courier_id;

          let date;
          date = new Date();
          date =
            date.getUTCFullYear() +
            "-" +
            ("00" + (date.getUTCMonth() + 1)).slice(-2) +
            "-" +
            ("00" + date.getUTCDate()).slice(-2) +
            " " +
            ("00" + date.getUTCHours()).slice(-2) +
            ":" +
            ("00" + date.getUTCMinutes()).slice(-2) +
            ":" +
            ("00" + date.getUTCSeconds()).slice(-2);

          let queryApplicationSpecific =
            "INSERT INTO `courier_review` (courier_id, applicant_name, applicant_email, discovery_info, extra_info, date_submitted) VALUES ('" +
            courierId +
            "', '" +
            applicantName +
            "', '" +
            email +
            "', '" +
            discoveryInfo +
            "', '" +
            extraInfo +
            "', '" +
            date +
            "')";

          sql.query(queryApplicationSpecific, (err, result) => {
            if (err) {
              return res.status(500).send(err);
            }
            console.log(result);
            res
              .status(200)
              .send("Successfully submitted new application to database.");
          });
        }
      );
    }
  });
});

module.exports = courierApplicationRouter;
