'use strict';

var express = require('express');
var programApplicationRouter = express.Router();
const sql = require('../db.js');

programApplicationRouter.post('/', function (req, res) {

    // general info
    let programName = req.body.programName;
    let email = req.body.email;
    let phone = req.body.phone;
    let programAddress = req.body.address;
    let area = req.body.area;
    let deliveryInstructions = req.body.deliveryInstructions;
    let ageRange = req.body.ageRange;
    let numKids = req.body.numKids;
    let { monday, tuesday, wednesday, thursday, friday } = req.body.daysRequired;
    let dietaryRestrictions = req.body.dietaryRestrictions;
    let passwordHash = req.body.passwordHash;

    // application specific info
    let applicantName = req.body.applicantName;
    let applicantPhone = req.body.applicantPhone;
    let applicantEmail = req.body.applicantEmail;
    let dinnerNeeds = req.body.dinnerNeeds;
    let inKindSupport = req.body.inKindSupport;
    let preferredTime = req.body.preferredTime;
    let discoveryInfo = req.body.discoveryInfo;
    let extraInfo = req.body.extraInfo;

    let queryGeneral = "INSERT INTO `program_partners` (name, address, area, delivery_instructions, phone, email, age_range, num_kids, dietary_restrictions, monday, tuesday, wednesday, thursday, friday, password_hash) VALUES ('" +
        programName + "', '" + programAddress + "', '" + area + "', '" + deliveryInstructions + "', '" + phone + "', '" + email + "', '" + ageRange + "', '" + numKids + "', '" + dietaryRestrictions + "', '" + monday + "', '" + tuesday + "', '" + wednesday + "', '" + thursday + "', '" + friday + "', '" + passwordHash + "')";

    sql.query(queryGeneral, (err, result) => {
        if (err) {
            if (err.code === "ER_DUP_ENTRY") {
                return res.status(400).send("A program with this name already exists.");
            } else {
                return res.status(500).send(err);
            }
        } else {
            sql.query("SELECT * FROM `program_partners` WHERE name = " + "'" + programName + "'", function (err, result, fields) {
                if (err) throw err;
                let programId = result[0].program_id;

                let date;
                date = new Date();
                date = date.getUTCFullYear() + '-' +
                    ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
                    ('00' + date.getUTCDate()).slice(-2) + ' ' +
                    ('00' + date.getUTCHours()).slice(-2) + ':' +
                    ('00' + date.getUTCMinutes()).slice(-2) + ':' +
                    ('00' + date.getUTCSeconds()).slice(-2);

                let queryApplicationSpecific = "INSERT INTO `program_review` (program_id, in_kind_support, discovery_info, extra_info, dinner_needs, applicant_name, applicant_phone, applicant_email, preferred_time, date_submitted) VALUES ('" +
                    programId + "', '" + inKindSupport + "', '" + discoveryInfo + "', '" + extraInfo + "', '" + dinnerNeeds + "', '" + applicantName + "', '" + applicantPhone + "', '" + applicantEmail + "', '" + preferredTime + "', '" + date + "')";

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

module.exports = programApplicationRouter;