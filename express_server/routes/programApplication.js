'use strict';

var express = require('express');
var programApplicationRouter = express.Router();
const sql = require('../db.js');

programApplicationRouter.post('/', function (req, res) {

    // general info
    let name = req.body.name;
    let address = req.body.address;
    let area = req.body.area;
    let
})