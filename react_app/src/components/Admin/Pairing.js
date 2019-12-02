import React from "react";
import Sidebar from "./Sidebar";
import "./Pairing.css";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

class Pairing extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			values: [[], [], [], []],
			restaurantsCurrentlyPairedWith: [],
			programsCurrentlyPairedWith: []
		}
	}

	componentDidMount = () => {
		fetch(express_server + "/api/admin/pairing")
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
				numPrograms: this.state.values[0].length
			})
			for (var i = 0; i < this.state.numPrograms; i++) {
				checked1[this.state.values[0][i]["program_id"]] = false
			}
			this.setState({
				programsChecked: checked1
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
		var numProgramsChecked = 0
		var numRestaurantsChecked = 0

		for (var programId in this.state.programsChecked) {
			if (this.state.programsChecked[programId] == true) {
				numProgramsChecked++
			}
		}
		for (var restaurantId in this.state.restaurantsChecked) {
			if (this.state.restaurantsChecked[restaurantId] == true) {
				numRestaurantsChecked++
			}
		}
		console.log(numProgramsChecked)
		console.log(numRestaurantsChecked)
		if (numProgramsChecked === 0) {
			alert("Please select a program to pair!")
		} else if (numRestaurantsChecked === 0) {
			alert("Please select a restaurant to pair!")
		}
		else if (numProgramsChecked > 1 && numRestaurantsChecked > 1) {
			alert("Cannot pair multiple programs to multiple restaurants!")
		} else {
			this.performPairing(numProgramsChecked, numRestaurantsChecked)
			// window.location.reload()
		}
	}

	performPairing = (numProgramsChecked, numRestaurantsChecked) => {
		if (numProgramsChecked === 1) {
			const programId = Object.keys(this.state.programsChecked).find(key => this.state.programsChecked[key] === true)

			// setTimeout(function() {
			// 	for (var restaurantId in this.state.restaurantsChecked) {
			// 		if (this.state.restaurantsChecked[restaurantId] == true) {
			// 			console.log(restaurantId);
			// 			var fetchURL = express_server + "/api/admin/pairing/" + programId + "/" + restaurantId
			// 				fetch(fetchURL, {
			// 			      method: "post",
			// 			    })
			// 		}
			// 	}
			// }, 1);

			var toSend = []
			toSend.push(programId)
			toSend.push(this.state.restaurantsChecked)

			var fetchURL = express_server + "/api/admin/pairing/program-to-restaurants"
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
			toSend.push(this.state.programsChecked)

			var fetchURL = express_server + "/api/admin/pairing/restaurant-to-programs"
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

	handleProgramChange = (e) => {
		if (this.state.programsChecked[e.target.name] == true) {
			this.state.programsChecked[e.target.name] = false
		} else {
			this.state.programsChecked[e.target.name] = true
		}
	}

	handleRestaurantChange = (e) => {
		if (this.state.restaurantsChecked[e.target.name] == true) {
			this.state.restaurantsChecked[e.target.name] = false
		} else {
			this.state.restaurantsChecked[e.target.name] = true
		}
	}

	handleProgramModal = (e) => {
		console.log(e.target.name)
		const fetchString = express_server + "/api/admin/pairing/current-restaurants/" + e.target.name
		fetch(fetchString)
			.then((res) => res.json())
			.then((restaurantsCurrentlyPairedWith) => { this.setState({ restaurantsCurrentlyPairedWith }); console.log(this.state.restaurantsCurrentlyPairedWith); })
	}

	handleRestaurantModal = (e) => {
		console.log(e.target.name)
		const fetchString = express_server + "/api/admin/pairing/current-programs/" + e.target.name
		fetch(fetchString)
			.then((res) => res.json())
			.then((programsCurrentlyPairedWith) => { this.setState({ programsCurrentlyPairedWith }); console.log(this.state.programsCurrentlyPairedWith); })
	}

	render() {
		var oddOrEven = "even";

		const numPrograms = this.state.numPrograms;
		const numRestaurants = this.state.numRestaurants;
		var numRestaurantsPairedWith;
		var numProgramsPairedWith;
		var programsCheckbox = [];
		var restaurantsCheckbox = [];
		var programsCheckboxStatus = this.state.programsChecked
		var restaurantsCheckboxStatus = this.state.restaurantsChecked
		var restaurantsCurrentlyPairedWith = this.state.restaurantsCurrentlyPairedWith
		var programsCurrentlyPairedWith = this.state.programsCurrentlyPairedWith

		var rows1 = []
		var rows2 = []

		for (var i = 0; i < numPrograms; i++) {
			numRestaurantsPairedWith = 0
			oddOrEven === "even" ? oddOrEven = "odd" : oddOrEven = "even"
			var cell = []
			var program = this.state.values[0][i]
			for (var j = 0; j < this.state.values[2].length; j++) {
				if (this.state.values[2][j]["program_id"] === program["program_id"]) {
					numRestaurantsPairedWith = this.state.values[2][j]["numRestaurantsPairedWith"]
				}
			}
			cell.push(<td class="narrowCell"><a href="#" data-toggle="modal" data-target="#programModal"
				name={program["program_id"]}
				onClick={this.handleProgramModal}> {program["name"]} </a></td>)
			cell.push(<td class="wideCell"> {program["address"]} </td>)
			cell.push(<td class="narrowCell"> {numRestaurantsPairedWith} </td>)
			if (programsCheckboxStatus) {
				programsCheckbox.push(<input type="checkbox"
					name={program["program_id"]}
					defaultChecked={this.state.programsChecked[program["program_id"]]}
					onChange={this.handleProgramChange}></input>)
			}
			cell.push(<td class="narrowCell"> {programsCheckbox[i]} </td>)
			rows1.push(<tr id={oddOrEven}> {cell} </tr>)
		}

		oddOrEven = "even";

		for (var i = 0; i < numRestaurants; i++) {
			numProgramsPairedWith = 0
			oddOrEven === "even" ? oddOrEven = "odd" : oddOrEven = "even";
			var cell = []
			var restaurant = this.state.values[1][i]
			for (var j = 0; j < this.state.values[3].length; j++) {
				if (this.state.values[3][j]["restaurant_id"] === restaurant["restaurant_id"]) {
					numProgramsPairedWith = this.state.values[3][j]["numProgramsPairedWith"]
				}
			}
			cell.push(<td class="narrowCell"><a href="#" data-toggle="modal" data-target="#restaurantModal"
				name={restaurant["restaurant_id"]}
				onClick={this.handleRestaurantModal}> {restaurant["name"]} </a></td>)
			cell.push(<td class="wideCell"> {restaurant["address"]} </td>)
			cell.push(<td class="narrowCell"> {numProgramsPairedWith} </td>)
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

		var programNames = []
		if (programsCurrentlyPairedWith[0]) {
			for (var i = 0; i < programsCurrentlyPairedWith[0].length; i++) {
				programNames.push(<p>{i + 1}. {programsCurrentlyPairedWith[0][i]["name"]}</p>)
			}
		}

		return (
			<>
				{!this.state.fail ? (
					<div id="pairings">
						<Sidebar />
						<div class="jumbotron jumbotron-fluid">
							<div class="container">
								<h1 class="display-4">Programs Pairings</h1>
								<p class="lead">Following tables allow you to pair programs that request meals with
				                    restaurants that will help deliver those meals</p>
							</div>
						</div>

						<h3 class="tableHeadings">Active Programs</h3>

						<table id="activeProgramsTable">
							<tr>
								<th id="tableHeader" class="narrowCell">
									Program Name
						</th>
								<th id="tableHeader" class="narrowCell">
									Program Address
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
									Programs Paired With
						</th>
								<th id="tableHeader" class="narrowCell">
									Pair?
						</th>
							</tr>
							{rows2}
						</table>

						<div class="modal fade" id="programModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
										<h5 class="modal-title" id="exampleModalLabel">Programs Currently Paired With</h5>
										<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										{programNames}
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

export default Pairing;
