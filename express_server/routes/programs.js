var express = require("express");
var router = express.Router();
const sql = require("../db.js");

router.get("/", function(req, res) {
  const query1 =
    "SELECT program_id, name, address FROM program_partners WHERE active_status = 1";
  sql.query(query1, function(err, results) {
    console.log(results);
    res.json(results);
  });
});

router.get("/export", function(req, res) {
  const query1 = "SELECT * FROM program_partners";
  sql.query(query1, function(err, results) {
    res.json(results);
  });
});

router.post("/import", function(req, res) {
  const deletequery = "DELETE FROM program_partners";
  sql.query(deletequery, function(err, results) {
    console.log(results);
  });
  const query1 =
    "INSERT INTO program_partners (program_id, name, address, area, active_status, delivery_instructions, phone, email, age_range, num_kids, dietary_restrictions, monday, tuesday, wednesday, thursday, friday, password_hash) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  for (let i = 0; i < req.body.length; i++) {
    const data = [
      req.body[i].program_id,
      req.body[i].name,
      req.body[i].address,
      req.body[i].area,
      req.body[i].active_status,
      req.body[i].delivery_instructions,
      req.body[i].phone,
      req.body[i].email,
      req.body[i].age_range,
      req.body[i].num_kids,
      req.body[i].dietary_restrictions,
      req.body[i].monday,
      req.body[i].tuesday,
      req.body[i].wednesday,
      req.body[i].thursday,
      req.body[i].friday,
      req.body[i].password_hash
    ];
    sql.query(query1, data, function(err, results) {
      console.log(err);
      console.log(results);
    });
  }
  res.status(200).end();
});
module.exports = router;
