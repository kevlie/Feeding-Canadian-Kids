'use strict';

var express = require('express');
var loginRouter = express.Router();
const sql = require('../db.js');

loginRouter.post('/login', function (req, res) {
    let email = req.body.contactEmail;
    let passwordHash = req.body.passwordHash;

    if (email && passwordHash) {
        sql.query('SELECT * FROM admin WHERE email = ? AND password_hash = ?', [email, passwordHash], function (err, results) {
            if (err) {
                return res.status(500).send(err);
            }
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.email = email;
                req.session.isAdmin = true;
                res.status(200).send("Logged in as admin.")
            } else {
                sql.query('SELECT * FROM restaurant_partners WHERE contact_email = ? AND password_hash = ?', [email, passwordHash], function (err, results, fields) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    if (results.length > 0) {
                        req.session.loggedin = true;
                        req.session.email = email;
                        req.session.isAdmin = false;
                        res.status(200).send("Credentials valid. Log in successful.");
                    } else {
                        sql.query('SELECT * FROM program_partners WHERE email = ? AND password_hash = ?', [email, passwordHash], function (err, results, fields) {
                            if (err) {
                                return res.status(500).send(err);
                            }
                            if (results.length > 0) {
                                req.session.loggedin = true;
                                req.session.email = email;
                                req.session.isAdmin = false;
                                res.status(200).send("Credentials valid. Log in successful.");
                            } else {
                                res.status(401).send('Incorrect email and/or password!');
                            }
                            res.end();
                        })
                    }
                    // res.end();
                })
            }
        })
    } else {
        res.status(400).send('Please enter email and password!');
        res.end();
    }
});

loginRouter.get('/validate-login', function (req, res) {
    if (req.session.loggedin) {
        res.status(200).send(req.session.email);
    } else {
        res.status(401).send(false);
    }
});

loginRouter.get('/validate-admin', function (req, res) {
    if (req.session.loggedin) {
        res.status(200).send(req.session.email);
    } else {
        res.status(401).send(false);
    }
})

module.exports = loginRouter;