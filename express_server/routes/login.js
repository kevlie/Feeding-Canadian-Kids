'use strict';

var express = require('express');
var loginRouter = express.Router();
const sql = require('../db.js');

loginRouter.post('/', function (req, res) {
    let email = req.body.contactEmail;
    let passwordHash = req.body.passwordHash;

    if (email && passwordHash) {
        sql.query('SELECT * FROM restaurant_partners WHERE contact_email = ? AND password_hash = ?', [email, passwordHash], function (err, results, fields) {
            if (err) {
                return res.status(500).send(err);
            }
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.email = email;
                res.send("Credentials valid. ")
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

module.exports = loginRouter;