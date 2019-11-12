'use strict';

var express = require('express');
var programRegistrationStatusRouter = express.Router();
const sql = require('../db.js');


programRegistrationStatusRouter.get('/', function(req, res) {
  let programId = req.params["programId"]
  query = `SELECT approval_status FROM program_review WHERE program_Id = ${programId}`
  sql.query(query, (err, result) => {
    if (err) throw err;
    res.send(result[0])
  });
})

module.exports = programRegistrationStatusRouter
