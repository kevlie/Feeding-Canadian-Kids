'use strict';

var express = require('express');
var loginRouter = express.Router();
const sql = require('../db.js');

loginRouter.post('/', function (req, res) {
    let username = request.body.username;
    let passwordHash = request.body.passwordHash;

    if (username && password) {
        sql.query('SELECT * FROM restaurant_partners WHERE contact_email = ? AND password_hash = ?', [username, passwordHash], function (error, results, fields) {
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
            } else {
                res.send('Incorrect email and/or password!');
            }
            res.end();
        })
    } else {
        res.send('Please enter email and password!');
        res.end();
    }
});