"use strict";

var express = require("express");
var loginRouter = express.Router();
const sql = require("../db.js");

loginRouter.post("/login", function (req, res) {
  let email = req.body.contactEmail;
  let passwordHash = req.body.passwordHash;

  if (email && passwordHash) {
    sql.query(
      "SELECT * FROM admin WHERE email = ? AND password_hash = ?",
      [email, passwordHash],
      function (err, results) {
        if (err) {
          return res.status(500).send(err);
        }
        if (results.length > 0) {
          req.session.loggedin = true;
          req.session.email = email;
          req.session.isAdmin = true;
          req.session.partnerType = "admin";
          res.status(200).send({
            email: email,
            isAdmin: true,
            partnerType: "admin"
          });
        } else {
          sql.query(
            "SELECT * FROM restaurant_partners WHERE contact_email = ? AND password_hash = ?",
            [email, passwordHash],
            function (err, results, fields) {
              if (err) {
                return res.status(500).send(err);
              }
              if (results.length > 0) {
                let restaurant = JSON.parse(JSON.stringify(results))[0];
                let activeStatus = restaurant.active_status;
                req.session.loggedin = true;
                req.session.email = email;
                req.session.isAdmin = false;
                req.session.partnerType = "restaurant";
                res.status(200).send({
                  email: email,
                  isAdmin: false,
                  partnerType: "restaurant",
                  activeStatus: activeStatus,
                });
              } else {
                sql.query(
                  "SELECT * FROM program_partners WHERE email = ? AND password_hash = ?",
                  [email, passwordHash],
                  function (err, results, fields) {
                    if (err) {
                      return res.status(500).send(err);
                    }
                    if (results.length > 0) {
                      let program = JSON.parse(JSON.stringify(results))[0];
                      let activeStatus = program.active_status;
                      req.session.loggedin = true;
                      req.session.email = email;
                      req.session.isAdmin = false;
                      req.session.partnerType = "program";
                      res.status(200).send({
                        email: email,
                        isAdmin: false,
                        partnerType: "program",
                        activeStatus: activeStatus
                      });
                    } else {
                      sql.query(
                        "SELECT * FROM courier_partners WHERE email = ? AND password_hash = ?",
                        [email, passwordHash],
                        function (err, results, fields) {
                          if (err) {
                            return res.status(500).send(err);
                          }
                          if (results.length > 0) {
                            let courier = JSON.parse(JSON.stringify(results))[0];
                            let activeStatus = courier.active_status;
                            req.session.loggedin = true;
                            req.session.email = email;
                            req.session.isAdmin = false;
                            req.session.partnerType = "courier";
                            res.status(200).send({
                              email: email,
                              isAdmin: false,
                              partnerType: "courier",
                              activeStatus: activeStatus
                            });
                          } else {
                            res
                              .status(401)
                              .send("Incorrect email and/or password!");
                          }
                          res.end();
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  } else {
    res.status(400).send("Please enter email and password!");
    res.end();
  }
});

loginRouter.get("/validate-login", function (req, res) {
  if (req.session.loggedin) {
    if (req.session.loggedin === true) {
      res.status(200).send({
        email: req.session.email,
        partnerType: req.session.partnerType,
        isAdmin: req.session.isAdmin
      });
    }
  } else {
    res.status(401).send(false);
  }
});

loginRouter.get("/validate-admin", function (req, res) {
  if (req.session.loggedin === true && req.session.isAdmin === true) {
    res.status(200).send(req.session.email);
  } else {
    res.status(401).send(false);
  }
});

loginRouter.get("/get-partner-type", function (req, res) {
  if (req.session.loggedin === true) {
    let partnerType = req.session.partnerType;
    res.status(200).send(partnerType);
  } else {
    res.status(401).send(false);
  }
});

loginRouter.get("/logout", function (req, res) {
  req.session.destroy(error => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      console.log("loggedout");
      res.status(200).end();
    }
  });
});

module.exports = loginRouter;
