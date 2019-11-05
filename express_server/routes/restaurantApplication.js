'use strict';

var express = require('express');
var restaurantApplicationRouter = express.Router();
const sql = require('../db.js');

restaurantApplicationRouter.post('/restaurantApplication', function (req, res) {

    // general info
    let restaurantName = req.body.restaurantName;
    let restaurantAddress = req.body.restaurantAddress;
    let contactPerson = req.body.contactPerson;
    let contactEmail = req.body.contactEmail;
    let contactPhone = req.body.contactPhone;
    let { monday, tuesday, wednesday, thursday, friday } = req.body.daysAvailable;
    let numMeals = req.body.numMeals;
    let deliveryCapability = req.body.deliveryCapability;
    let packaging = req.body.packaging;
    // let location = req.body.location; Todo: what's this

    // application specific info
    let timing = req.body.timing;
    let discovery = req.body.discovery;
    let extraInfo = req.body.extraInfo;
    let email = req.body.email;
    let applicantName = req.body.name;

    let queryGeneral = "INSERT INTO `restaurant_partners` (name, address, contact_person, contact_email, phone, delivery_capability, num_meals, packaging, monday, tuesday, wednesday, thursday, friday) VALUES ('" +
        restaurantName + "', '" + restaurantAddress + "', '" + contactPerson + "', '" + contactEmail + "', '" + contactPhone + "', '" + deliveryCapability + "', '" + numMeals + "', '" + packaging + "', '" + monday + "', '" + tuesday + "', '" + wednesday + "', '" + thursday + "', '" + friday + "')";



    sql.query(queryGeneral, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        else {


            let queryApplicationSpecific = "INSERT INTO `restaurant_review` (name, address, contact_person, contact_email, phone, delivery_capability, num_meals, packaging, monday, tuesday, wednesday, thursday, friday) VALUES ('" +
                restaurantName + "', '" + restaurantAddress + "', '" + contactPerson + "', '" + contactEmail + "', '" + contactPhone + "', '" + deliveryCapability + "', '" + numMeals + "', '" + packaging + "', '" + monday + "', '" + tuesday + "', '" + wednesday + "', '" + thursday + "', '" + friday + "')";

            sql.query(queryApplicationSpecific, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.send("Successfully submitted new application to database.");
            })
        }
    })

});

module.exports = restaurantApplicationRouter;