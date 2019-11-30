var express = require("express");
var router = express.Router();
const sql = require("../db.js");

router.get("/", function(req, res) {
  const query1 =
    "SELECT restaurant_id, name, address FROM restaurant_partners WHERE active_status = 1";
  sql.query(query1, function(err, results) {
    console.log(results);
    res.json(results);
  });
});

router.get("/export", function(req, res) {
  const query1 = "SELECT * FROM restaurant_partners";
  sql.query(query1, function(err, results) {
    res.json(results);
  });
});

router.post("/import", function(req, res) {
  const deletequery = "DELETE FROM restaurant_partners";
  sql.query(deletequery, function(err, results) {
    console.log(results);
  });
  const query1 =
    "INSERT INTO restaurant_partners (restaurant_id, name, address, contact_person, contact_email, active_status, phone, latitude, longitude, delivery_capability, num_meals, packaging, monday, tuesday, wednesday, thursday, friday, password_hash, uber_eats_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  for (let i = 0; i < req.body.length; i++) {
    const data = [
      req.body[i].restaurant_id,
      req.body[i].name,
      req.body[i].address,
      req.body[i].contact_person,
      req.body[i].contact_email,
      req.body[i].active_status,
      req.body[i].phone,
      0, // req.body[i].latitude , set to 0 because its unused
      0, // req.body[i].longitude, set to 0 because its unused
      req.body[i].delivery_capability,
      req.body[i].num_meals,
      req.body[i].packaging,
      req.body[i].monday,
      req.body[i].tuesday,
      req.body[i].wednesday,
      req.body[i].thursday,
      req.body[i].friday,
      req.body[i].password_hash,
      req.body[i].uber_eats_status
    ];
    console.log(data);
    sql.query(query1, data, function(err, results) {
      console.log(err);
      console.log(results);
    });
  }
  res.status(200).end();
});

module.exports = router;
