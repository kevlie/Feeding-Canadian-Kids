'use strict';

var express = require('express');
var pendingProgramsRouter = express.Router();
const sql = require('../db.js');

pendingProgramsRouter.get('/' , function(req, res) {
  sql.query("SELECT * FROM program_review WHERE approval_status = FALSE", function(err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = pendingProgramsRouter;
