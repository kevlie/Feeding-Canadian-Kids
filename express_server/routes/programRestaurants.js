var express = require("express");
var router = express.Router();
const sql = require("../db.js");

router.get("/", (req, res) => {
  let email = req.session.email;
  let query1 = "SELECT program_id FROM program_partners WHERE email = ?";
  sql.query(query1, email, function (err, results) {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length > 0) {
      let program_id = JSON.parse(JSON.stringify(results))[0].program_id;
      let query2 = "SELECT restaurant_id FROM pairings WHERE program_id = ?";
      sql.query(query2, program_id, function (err, results) {
        if (results.length > 0) {
          let restaurant_ids = JSON.parse(JSON.stringify(results));
          let data = [];
          for (let i = 0; i < restaurant_ids.length; i++) {
            data.push(restaurant_ids[i].restaurant_id);
          }
          let queryData = [data];
          query3 =
            "SELECT name, address, contact_email, phone FROM restaurant_partners WHERE restaurant_id IN (?)";
          sql.query(query3, queryData, function (err, results) {
            res.status(200).json(results);
          });
        }
      });
    } else {
      res.end();
    }
  });
});

module.exports = router;
