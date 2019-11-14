'use strict';

var express = require('express');
var restaurantApplicationRouter = express.Router();
const sql = require('../db.js');

restaurantApplicationRouter.post('/', function (req, res) {

    // general info
    let restaurantName = req.body.restaurantName;
    let restaurantAddress = req.body.restaurantAddress;
    let contactPerson = req.body.contactPerson;
    let contactEmail = req.body.contactEmail;
    let contactPhone = req.body.contactPhone;
    let { monday, tuesday, wednesday, thursday, friday } = req.body.daysAvailable;
    let numMeals = req.body.numMeals;
    let deliveryCapability = req.body.deliveryCapability;
    let uberEatsStatus = req.body.uberEatsStatus;
    let packaging = req.body.packaging;
    let passwordHash = req.body.passwordHash;
    // let location = req.body.location; Todo: what's this

    // application specific info
    let timing = req.body.timing;
    let discoveryInfo = req.body.discoveryInfo;
    let extraInfo = req.body.extraInfo;
    let phone = req.body.phone;
    let email = req.body.email;
    let applicantName = req.body.applicantName;

    let queryGeneral = "INSERT INTO `restaurant_partners` (name, address, contact_person, contact_email, password_hash, phone, delivery_capability, uber_eats_status, num_meals, packaging, monday, tuesday, wednesday, thursday, friday) VALUES ('" +
        restaurantName + "', '" + restaurantAddress + "', '" + contactPerson + "', '" + contactEmail + "', '" + passwordHash + "', '" + contactPhone + "', '" + deliveryCapability + "', '" + uberEatsStatus + "', '" + numMeals + "', '" + packaging + "', '" + monday + "', '" + tuesday + "', '" + wednesday + "', '" + thursday + "', '" + friday + "')";



    sql.query(queryGeneral, (err, result) => {
        if (err) {
            if (err.code === "ER_DUP_ENTRY") {
                return res.send("A restaurant with this name already exists.");
            } else {
                return res.status(500).send(err);
            }
        }
        else {
            sql.query("SELECT * FROM `restaurant_partners` WHERE name = " + "'" + restaurantName + "'", function (err, result, fields) {
                if (err) throw err;
                let restaurantId = result[0].restaurant_id;

                let date;
                date = new Date();
                date = date.getUTCFullYear() + '-' +
                    ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
                    ('00' + date.getUTCDate()).slice(-2) + ' ' +
                    ('00' + date.getUTCHours()).slice(-2) + ':' +
                    ('00' + date.getUTCMinutes()).slice(-2) + ':' +
                    ('00' + date.getUTCSeconds()).slice(-2);

                let queryApplicationSpecific = "INSERT INTO `restaurant_review` (restaurant_id, applicant_email, applicant_phone, discovery_info, extra_info, applicant_name, timing, date_submitted) VALUES ('" +
                    restaurantId + "', '" + email + "', '" + phone + "', '" + discoveryInfo + "', '" + extraInfo + "', '" + applicantName + "', '" + timing + "', '" + date + "')";

                sql.query(queryApplicationSpecific, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.status(200).send("Successfully submitted new application to database.");
                });
            });
        }
    });

});

module.exports = restaurantApplicationRouter;