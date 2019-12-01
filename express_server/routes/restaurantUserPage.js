'use strict';

var express = require('express');
var restaurantRouter = express.Router();
const sql = require('../db.js');

restaurantRouter.get('/orders', function(req, res) {
    const email = req.session.email;
    //console.log(email)
    let query1 = 'SELECT pr.name, pr.address, pr.dietary_restrictions, monday_meals, monday_time, ' +
                 'tuesday_meals, tuesday_time, wednesday_meals, wednesday_time, ' +
                 'thursday_meals, thursday_time, friday_meals, friday_time ' + 
                 'FROM restaurant_partners r INNER JOIN pairings p ON r.restaurant_id = p.restaurant_id ' + 
                 'INNER JOIN program_partners pr ON pr.program_id = p.program_id WHERE r.contact_email = ?'
    if (email){
        sql.query(query1, [email], (err, results) => {
            if (err){
                return res.status(500).send(err);
            }
            if (results.length >= 0){
                
                res.status(200).send(results) //results is an array where each object is a row from the query

            }
        })
    }
})

restaurantRouter.get('/name', function(req,res) {
    const email = req.session.email;
    let query2 = 'SELECT name FROM restaurant_partners WHERE restaurant_partners.contact_email = ?'
    if (email){
        sql.query(query2, [email], (err, results) => {
            if (err){
                return res.status(500).send(err);
            }
            if (results.length >= 0) {
                res.status(200).send(results)
            }
        })
    }
})

restaurantRouter.get('/', function(req, res) {
    const email = req.session.email;
    let query3 = "SELECT approval_status FROM restaurant_review WHERE applicant_email = ?";
    sql.query(query3, [email], (err, results)=> {
        if (err) {
            return res.status(500).send(err);
        }
        if (!email) { //this user is not logged in. Just return null

        }
        if (results.length >= 0) {
            res.json(results);
          }
    })
})

restaurantRouter.get('/isRestaurant', (req, res) =>{
    if (req.session.loggedin === undefined || req.session.partnerType !== "restaurant") {
        //console.log("not admin");
        res.status(500).send();
      } else {
        res.json(true);
      }
})
module.exports = restaurantRouter;