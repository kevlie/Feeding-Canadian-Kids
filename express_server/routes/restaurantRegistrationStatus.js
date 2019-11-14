'use strict';

var express = require('express');
var restaurantRegistrationStatusRouter = express.Router();
const sql = require('../db.js');


restaurantRegistrationStatusRouter.get('/', function (req, res) {
    let restaurantId = req.params["restaurantId"]
    query = `SELECT approval_status FROM restaurant_review WHERE restaurant_Id = ${restaurantId}`
    sql.query(query, (err, result) => {
        if (err) throw err;
        res.send(result[0])
    });
})

module.exports = restaurantRegistrationStatusRouter
