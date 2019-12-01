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
    if (results.length === 0) {
      res.end();
    }
    let program_id = JSON.parse(JSON.stringify(results))[0].program_id;
    let query2 =
      "SELECT restaurant_id, monday_time, tuesday_time, wednesday_time, thursday_time, friday_time, monday_meals, tuesday_meals, wednesday_meals, thursday_meals, friday_meals FROM pairings WHERE program_id = ?";
    sql.query(query2, program_id, function (err, results) {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.length > 0) {
        let restaurants = JSON.parse(JSON.stringify(results));
        let data = [];
        for (let i = 0; i < restaurants.length; i++) {
          data.push(restaurants[i].restaurant_id);
        }
        let queryData = [data];
        query3 =
          "SELECT restaurant_id, name, address, contact_email, phone FROM restaurant_partners WHERE restaurant_id IN (?)";
        sql.query(query3, queryData, function (err, results2) {
          if (err) {
            return res.status(500).send(err);
          }
          if (results.length > 0) {
            let restaurantInfo = JSON.parse(JSON.stringify(results2));
            for (let i = 0; i < restaurantInfo.length; i++) {
              for (let j = 0; j < restaurants.length; j++) {
                if (
                  restaurants[j].restaurant_id ==
                  restaurantInfo[i].restaurant_id
                ) {
                  restaurants[j].name = restaurantInfo[i].name;
                  restaurants[j].address = restaurantInfo[i].address;
                  restaurants[j].contact_email =
                    restaurantInfo[i].contact_email;
                  restaurants[j].phone = restaurantInfo[i].phone;
                }
              }
            }
            res.status(200).json(restaurants);
          }
        });
      } else {
        res.end();
      }
    });
  });
});

module.exports = router;
