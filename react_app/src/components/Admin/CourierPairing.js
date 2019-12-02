import React from "react";
import Sidebar from "./Sidebar";
import "./CourierPairing.css";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

class CourierPairing extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			values: [[], [], [], []],
			restaurantsCurrentlyPairedWith: [],
			couriersCurrentlyPairedWith: []
		}
	}

	componentDidMount = () => {
		fetch(express_server + "/api/admin/courierPairing")
			.then((res) => res.json())
			.then((values) => { this.setState({ values }); console.log(this.state.values); })
			.then(() => this.updateState())

		// fetch(express_server + "/api/admin/isAdmin", {
		//      method: "get",
		//      credentials: "include"
		//    }).then(res => {
		//      if (res.status != 200) {
		//        this.setState({ fail: true });
		//        console.log(this.state.fail);
		//      }
		//    });
	}

	updateState = () => {
		let checked1 = {}
		let checked2 = {}
		if (this.state.values[0].length > 0) {
			this.setState({
				numCouriers: this.state.values[0].length
			})
			for (var i = 0; i < this.state.numCouriers; i++) {
				checked1[this.state.values[0][i]["courier_id"]] = false
			}
			this.setState({
				couriersChecked: checked1
			})
		}
		if (this.state.values[1].length > 0) {
			this.setState({
				numRestaurants: this.state.values[1].length
			})
			for (var j = 0; j < this.state.numRestaurants; j++) {
				checked2[this.state.values[1][j]["restaurant_id"]] = false
			}
			this.setState({
				restaurantsChecked: checked2
			})
		}
	}

	submitPairing = () => {
		var numCouriersChecked = 0
		var numRestaurantsChecked = 0

		for (var courierId in this.state.couriersChecked) {
			if (this.state.couriersChecked[courierId] == true) {
				numCouriersChecked++
			}
		}
		for (var restaurantId in this.state.restaurantsChecked) {
			if (this.state.restaurantsChecked[restaurantId] == true) {
				numRestaurantsChecked++
			}
		}
		console.log(numCouriersChecked)
		console.log(numRestaurantsChecked)
		if (numCouriersChecked === 0) {
			alert("Please select a courier to pair!")
		} else if (numRestaurantsChecked === 0) {
			alert("Please select a restaurant to pair!")
		}
		else if (numCouriersChecked > 1 && numRestaurantsChecked > 1) {
			alert("Cannot pair multiple couriers to multiple restaurants!")
		} else {
			this.performPairing(numCouriersChecked, numRestaurantsChecked)
			// window.location.reload()
		}
	}

	performPairing = (numCouriersChecked, numRestaurantsChecked) => {
		if (numCouriersChecked === 1) {
			const courierId = Object.keys(this.state.couriersChecked).find(key => this.state.couriersChecked[key] === true)

			// setTimeout(function() {
			// 	for (var restaurantId in this.state.restaurantsChecked) {
			// 		if (this.state.restaurantsChecked[restaurantId] == true) {
			// 			console.log(restaurantId);
			// 			var fetchURL = express_server + "/api/admin/courierPairing/" + courierId + "/" + restaurantId
			// 				fetch(fetchURL, {
			// 			      method: "post",
			// 			    })
			// 		}
			// 	}
			// }, 1);

			var toSend = []
			toSend.push(courierId)
			toSend.push(this.state.restaurantsChecked)

			var fetchURL = express_server + "/api/admin/courierPairing/courier-to-restaurants"
			fetch(fetchURL, {
				method: "post",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(toSend)
			})
		} else if (numRestaurantsChecked === 1) {
			const restaurantId = Object.keys(this.state.restaurantsChecked).find(key => this.state.restaurantsChecked[key] === true)

			var toSend = []
			toSend.push(restaurantId)
			toSend.push(this.state.couriersChecked)

			var fetchURL = express_server + "/api/admin/courierPairing/restaurant-to-couriers"
			fetch(fetchURL, {
				method: "post",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(toSend)
			})
		}
	}

	handleCourierChange = (e) => {
		if (this.state.couriersChecked[e.target.name] == true) {
			this.state.couriersChecked[e.target.name] = false
		} else {
			this.state.couriersChecked[e.target.name] = true
		}
	}

	handleRestaurantChange = (e) => {
		if (this.state.restaurantsChecked[e.target.name] == true) {
			this.state.restaurantsChecked[e.target.name] = false
		} else {
			this.state.restaurantsChecked[e.target.name] = true
		}
	}

	handleCourierModal = (e) => {
		console.log(e.target.name)
		const fetchString = express_server + "/api/admin/courierPairing/current-restaurants/" + e.target.name
		fetch(fetchString)
			.then((res) => res.json())
			.then((restaurantsCurrentlyPairedWith) => { this.setState({ restaurantsCurrentlyPairedWith }); console.log(this.state.restaurantsCurrentlyPairedWith); })
	}

	handleRestaurantModal = (e) => {
		console.log(e.target.name)
		const fetchString = express_server + "/api/admin/courierPairing/current-couriers/" + e.target.name
		fetch(fetchString)
			.then((res) => res.json())
			.then((couriersCurrentlyPairedWith) => { this.setState({ couriersCurrentlyPairedWith }); console.log(this.state.couriersCurrentlyPairedWith); })
	}

	render() {
		var oddOrEven = "even";

		const numCouriers = this.state.numCouriers;
		const numRestaurants = this.state.numRestaurants;
		var numRestaurantsPairedWith;
		var numCouriersPairedWith;
		var couriersCheckbox = [];
		var restaurantsCheckbox = [];
		var couriersCheckboxStatus = this.state.couriersChecked
		var restaurantsCheckboxStatus = this.state.restaurantsChecked
		var restaurantsCurrentlyPairedWith = this.state.restaurantsCurrentlyPairedWith
		var couriersCurrentlyPairedWith = this.state.couriersCurrentlyPairedWith

		var rows1 = []
		var rows2 = []

		for (var i = 0; i < numCouriers; i++) {
			numRestaurantsPairedWith = 0
			oddOrEven === "even" ? oddOrEven = "odd" : oddOrEven = "even"
			var cell = []
			var courier = this.state.values[0][i]
			for (var j = 0; j < this.state.values[2].length; j++) {
				if (this.state.values[2][j]["courier_id"] === courier["courier_id"]) {
					numRestaurantsPairedWith = this.state.values[2][j]["numRestaurantsPairedWith"]
				}
			}
			cell.push(<td class="narrowCell"><a href="#" data-toggle="modal" data-target="#courierModal"
				name={courier["courier_id"]}
				onClick={this.handleCourierModal}> {courier["name"]} </a></td>)
			cell.push(<td class="wideCell"> {courier["area_service"]} </td>)
			cell.push(<td class="narrowCell"> {numRestaurantsPairedWith} </td>)
			if (couriersCheckboxStatus) {
				couriersCheckbox.push(<input type="checkbox"
					name={courier["courier_id"]}
					defaultChecked={this.state.couriersChecked[courier["courier_id"]]}
					onChange={this.handleCourierChange}></input>)
			}
			cell.push(<td class="narrowCell"> {couriersCheckbox[i]} </td>)
			rows1.push(<tr id={oddOrEven}> {cell} </tr>)
		}

		oddOrEven = "even";

		for (var i = 0; i < numRestaurants; i++) {
			numCouriersPairedWith = 0
			oddOrEven === "even" ? oddOrEven = "odd" : oddOrEven = "even";
			var cell = []
			var restaurant = this.state.values[1][i]
			for (var j = 0; j < this.state.values[3].length; j++) {
				if (this.state.values[3][j]["restaurant_id"] === restaurant["restaurant_id"]) {
					numCouriersPairedWith = this.state.values[3][j]["numCouriersPairedWith"]
				}
			}
			cell.push(<td class="narrowCell"><a href="#" data-toggle="modal" data-target="#restaurantModal"
				name={restaurant["restaurant_id"]}
				onClick={this.handleRestaurantModal}> {restaurant["name"]} </a></td>)
			cell.push(<td class="wideCell"> {restaurant["address"]} </td>)
			cell.push(<td class="narrowCell"> {numCouriersPairedWith} </td>)
			if (restaurantsCheckboxStatus) {
				restaurantsCheckbox.push(<input type="checkbox"
					name={restaurant["restaurant_id"]}
					defaultChecked={this.state.restaurantsChecked[restaurant["restaurant_id"]]}
					onChange={this.handleRestaurantChange}></input>)
			}
			cell.push(<td class="narrowCell"> {restaurantsCheckbox[i]} </td>)
			rows2.push(<tr id={oddOrEven}> {cell} </tr>)
		}

		var restaurantNames = []
		if (restaurantsCurrentlyPairedWith[0]) {
			for (var i = 0; i < restaurantsCurrentlyPairedWith[0].length; i++) {
				restaurantNames.push(<p>{i + 1}. {restaurantsCurrentlyPairedWith[0][i]["name"]}</p>)
			}
		}

		var courierNames = []
		if (couriersCurrentlyPairedWith[0]) {
			for (var i = 0; i < couriersCurrentlyPairedWith[0].length; i++) {
				courierNames.push(<p>{i + 1}. {couriersCurrentlyPairedWith[0][i]["name"]}</p>)
			}
		}

		return (
			<>
				{!this.state.fail ? (
					<div id="pairings">
						<Sidebar />
						<div class="jumbotron jumbotron-fluid">
							<div class="container">
								<h1 class="display-4">Couriers Pairings</h1>
								<p class="lead">Following tables allow you to pair couriers that request meals with
				                    restaurants that will help deliver those meals</p>
							</div>
						</div>

						<h3 class="tableHeadings">Active Couriers</h3>

						<table id="activeCouriersTable">
							<tr>
								<th id="tableHeader" class="narrowCell">
									Courier Name
						</th>
								<th id="tableHeader" class="narrowCell">
									Courier Service Area
						</th>
								<th id="tableHeader" class="narrowCell">
									Restaurants Paired With
						</th>
								<th id="tableHeader" class="narrowCell">
									Pair?
						</th>
							</tr>
							{rows1}
						</table>

						<h3 class="tableHeadings">Active Restaurants</h3>

						<table id="activeRestaurantsTable">
							<tr>
								<th id="tableHeader" class="narrowCell">
									Restaurant Name
						</th>
								<th id="tableHeader" class="narrowCell">
									Restaurant Address
						</th>
								<th id="tableHeader" class="narrowCell">
									Couriers Paired With
						</th>
								<th id="tableHeader" class="narrowCell">
									Pair?
						</th>
							</tr>
							{rows2}
						</table>

						<div class="modal fade" id="courierModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="exampleModalLabel">Restaurants Currently Paired With</h5>
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										{restaurantNames}
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										<button type="button" class="btn btn-primary">Save changes</button>
									</div>
								</div>
							</div>
						</div>

						<div class="modal fade" id="restaurantModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="exampleModalLabel">Couriers Currently Paired With</h5>
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										{courierNames}
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										<button type="button" class="btn btn-primary">Save changes</button>
									</div>
								</div>
							</div>
						</div>

						<div class="pairButton">
							<a href="#" class="btn btn-info btn1" onClick={this.submitPairing}>Submit Pairing</a>
						</div>
						<div id="footer"></div>
					</div>
				) : (
						<h4> You do not have the permissions to access this page.</h4>
					)}
			</>
		)
	}
}

export default CourierPairing;
