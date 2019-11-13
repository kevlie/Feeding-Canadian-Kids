var express = require('express');
var adminRouter = express.Router();
const sql = require('../db.js');

adminRouter.get("/", function(req, res) {
	var values = [];

	// res.json([{
	//     id: 1,
	//     name: "Hiccup",
	//     password: 'hiccup'
	//   }, {
	//     id: 2,
	//     name: "King Arthur",
	//     password: 'king-arthur'
	//   }]);

	query1 = "SELECT count(program_id) as count FROM program_review";
	sql.query(query1, function(err, results) {
		console.log(results)
		let numPrograms = results[0]["count"]
		let obj = {"programs": numPrograms}
		values.push(obj)
	})

	query2 = "SELECT count(restaurant_id) as count FROM restaurant_review";
	sql.query(query2, function(err, results) {
		let numRestaurants = results[0]["count"]
		let obj2 = {"restaurants": numRestaurants}
		console.log(obj2)
		values.push(obj2)
		console.log(values);
	})

	query3 = "SELECT count(program_id) as count FROM program_review WHERE approval_status=0";
	sql.query(query3, function(err, results) {
		let numNewPrograms = results[0]["count"]
		let obj3 = {"newPrograms": numNewPrograms}
		console.log(obj3)
		values.push(obj3)
		console.log(values);
	})

	query4 = "SELECT count(restaurant_id) as count FROM restaurant_review WHERE approval_status=0";
	sql.query(query4, function(err, results) {
		let numNewRestaurants = results[0]["count"]
		let obj4 = {"newRestaurants": numNewRestaurants}
		console.log(obj4)
		values.push(obj4)
		console.log(values);
		res.json(values);
	})
});

module.exports = adminRouter;