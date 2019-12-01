var express = require('express');
var router = express.Router();
const sql = require('../db.js');

//getting partners info
router.get("/", function(req, res) {
	let partners = []
	let courierPartners = []
	let restaurantPartners = []
	let restaurantsPairedWith = []
	let couriersPairedWith = []

	query1 = "SELECT courier_id, name, area_service FROM courier_partners cp WHERE active_status = 1";
	sql.query(query1, function(err, results) {
		courierPartners = results
	})

	query2 = "SELECT restaurant_id, name, address FROM restaurant_partners rp WHERE active_status = 1";
	sql.query(query2, function(err, results) {
		restaurantPartners = results
	})

	query3 = "SELECT courier_id, count(restaurant_id) AS numRestaurantsPairedWith FROM courier_restaurant_pairings GROUP BY courier_id";
	sql.query(query3, function(err, results) {
		restaurantsPairedWith = results
	})

	query4 = "SELECT restaurant_id, count(courier_id) AS numCouriersPairedWith FROM courier_restaurant_pairings GROUP BY restaurant_id";
	sql.query(query4, function(err, results) {
		couriersPairedWith = results
		partners.push(courierPartners)
		partners.push(restaurantPartners)
		partners.push(restaurantsPairedWith)
		partners.push(couriersPairedWith)
		res.json(partners)
	})
})

//performing pairing
// router.post("/:courierId/:restaurantId", function(req, res) {
// 	courId = parseInt(req.params.courierId)
// 	restId = parseInt(req.params.restaurantId)
// 	query1 = "SELECT courier_id, restaurant_id FROM courier_restaurant_pairings"
// 	var exists = false
// 	sql.query(query1, function(err, results) {
// 		for (var i = 0; i < results.length; i++) {
// 			if (results[i]["courier_id"] == courId && results[i]["restaurant_id"] == restId) {
// 				console.log("HErE");
// 				exists = true
// 				break
// 			}
// 		}
// 		if (!exists) {
// 			console.log(courId);
// 			console.log(restId);
// 			query2 = "INSERT INTO courier_restaurant_pairings (courier_id, restaurant_id, last_day, linear_distance, monday_time, tuesday_time, wednesday_time, thursday_time, friday_time, monday_meals, tuesday_meals, wednesday_meals, thursday_meals, friday_meals) VALUES (" + courId + ", " + restId + ", null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)";
// 			sql.query(query2, function(err, results) {
// 				//console.log(err);
// 			})
// 		}
// 	})
// })

router.post("/courier-to-restaurants", function(req, res) {
	console.log(req.body);
	const courId = parseInt(req.body[0])
	query1 = "SELECT courier_id, restaurant_id FROM courier_restaurant_pairings"
	sql.query(query1, function(err, results) {
		for (var i = 0; i < results.length; i++) {
			if (results[i]["courier_id"] == courId && req.body[1][results[i]["restaurant_id"]] == true) {
				req.body[1][results[i]["restaurant_id"]] = false
			}
		}
		for (restId in req.body[1]) {
			if (req.body[1][restId] == true) {
				query2 = "INSERT INTO courier_restaurant_pairings (restaurant_id, courier_id) VALUES (" + restId + ", " + courId + ")";
				sql.query(query2, function(err, results) {
					//console.log(err);
				})
			}
		}
	})
})

router.post("/restaurant-to-couriers", function(req, res) {
	console.log(req.body);
	const restId = parseInt(req.body[0])
	query1 = "SELECT courier_id, restaurant_id FROM courier_restaurant_pairings"
	sql.query(query1, function(err, results) {
		for (var i = 0; i < results.length; i++) {
			if (results[i]["restaurant_id"] == restId && req.body[1][results[i]["courier_id"]] == true) {
				req.body[1][results[i]["courier_id"]] = false
			}
		}
		for (courId in req.body[1]) {
			if (req.body[1][courId] == true) {
				query2 = "INSERT INTO courier_restaurant_pairings (restaurant_id, courier_id) VALUES (" + restId + ", " + courId + ")";
				sql.query(query2, function(err, results) {
					//console.log(err);
				})
			}
		}
	})
})

//getting restaurants courierId currently paired with
router.get("/current-restaurants/:courierId", function(req, res) {
	restaurantsCurrentlyPairedWith = []
	query = "SELECT p.courier_id, rp.name FROM courier_restaurant_pairings p, restaurant_partners rp WHERE p.restaurant_id = rp.restaurant_id and p.courier_id = " + req.params.courierId;
	sql.query(query, function(err, results) {
		restaurantsCurrentlyPairedWith.push(results)
		console.log(results)
		console.log(restaurantsCurrentlyPairedWith);
		res.json(restaurantsCurrentlyPairedWith)
	})
})

//getting couriers restaurantId currently paired with
router.get("/current-couriers/:restaurantId", function(req, res) {
	couriersCurrentlyPairedWith = []
	query = "SELECT p.restaurant_id, cp.name FROM courier_restaurant_pairings p, courier_partners cp WHERE p.courier_id = cp.courier_id and p.restaurant_id = " + req.params.restaurantId;
	sql.query(query, function(err, results) {
		couriersCurrentlyPairedWith.push(results)
		console.log(results)
		console.log(couriersCurrentlyPairedWith)
		res.json(couriersCurrentlyPairedWith)
	})
})

module.exports = router;