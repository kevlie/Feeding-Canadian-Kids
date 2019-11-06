'use strict';

var express = require('express');
var programApplicationRouter = express.Router();
const sql = require('../db.js');

programApplicationRouter.post('/', function (req, res) {

    // general info
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let address = req.body.address;
    let area = req.body.area;
    let programName = req.body.programName;
    let addr = req.body.address;
    let deliveryInstructions = req.body.deliveryInstructions;
    let ageRange = req.body.ageRange;
    let numKids = req.body.numKids;
    let { monday, tuesday, wednesday, thursday, friday } = req.body.daysRequired;
    let dietaryRestrictions = req.body.dietaryRestrictions;

    // application specific info
    let applicantName = req.body.applicantName;
    let applicantPhone = req.body.applicantPhone;
    let applicantEmail = req.body.applicantEmail;
    let dinnerNeeds = req.body.dinnerNeeds;
    let inKindSupport = req.body.inKindSupport;
    let preferredTime = req.body.preferredTime;
    let discovery = req.body.discovery;
    let extraInfo = req.body.extraInfo;


})