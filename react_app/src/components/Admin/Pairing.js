import React from "react";
import Sidebar from "./Sidebar";
import "./Pairing.css";

class Pairing extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			values: [[], [], [], []]
		}
	}

	componentDidMount = () => {
		fetch("http://localhost:9000/api/admin/pairing")
			.then((res) => res.json())
			.then((values) => this.setState({values}))
			.then(() => this.updateState())
	}

	updateState= () => {
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

	// submitPairing = (programsCheckbox, restaurantsCheckbox) => {
	// 	console.log(programsCheckbox[0].props);
	// 	console.log(restaurantsCheckbox);
	// 	// console.log(programsCheckbox[0].props["name"])
	// 	// if (programsCheckbox[0].props["checked"] == true) {
	// 	// 	console.log("NAH");
	// 	// } else {
	// 	// 	console.log("CHECKED");
	// 	// }
	// }

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
			window.location.reload()
		}
	}

	performPairing = (numProgramsChecked, numRestaurantsChecked) => {
		if (numProgramsChecked === 1) {
			const programId = Object.keys(this.state.programsChecked).find(key => this.state.programsChecked[key] === true)
			for (var restaurantId in this.state.restaurantsChecked) {
				if (this.state.restaurantsChecked[restaurantId] == true) {
					var fetchURL = "http://localhost:9000/api/admin/pairing/" + programId + "/" + restaurantId
					fetch(fetchURL, {
				      method: "post",
				    })
				}
			}
		}
		
	}

	handleProgramChange = (e) => {
		console.log(e.target.name)
		if (this.state.programsChecked[e.target.name] == true) {
			this.state.programsChecked[e.target.name] = false
		} else {
			this.state.programsChecked[e.target.name] = true
		}
		console.log(this.state.programsChecked);
	}

	handleRestaurantChange = (e) => {
		console.log(e.target.name)
		if (this.state.restaurantsChecked[e.target.name] == true) {
			this.state.restaurantsChecked[e.target.name] = false
		} else {
			this.state.restaurantsChecked[e.target.name] = true
		}
		console.log(this.state.restaurantsChecked);
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

		console.log(programsCheckboxStatus)
		console.log(restaurantsCheckboxStatus)

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
	      	cell.push(<td class="narrowCell"><a href={ "newSignups/program/" + program["program_id"] }> { program["name"] } </a></td>)
	      	cell.push(<td class="wideCell"> { program["address"] } </td>)
	      	cell.push(<td class="narrowCell"> { numRestaurantsPairedWith } </td>)
	      	if (programsCheckboxStatus) {
		      	programsCheckbox.push(<input type="checkbox"
		      									name={ program["program_id"] }
		      									defaultChecked={this.state.programsChecked[program["program_id"]]}
	    	  							  		onChange={ this.handleProgramChange }></input>)
	    	}
	      	cell.push(<td class="narrowCell"> { programsCheckbox[i] } </td>)
	      	rows1.push(<tr id={ oddOrEven }> { cell } </tr>)
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
	      	cell.push(<td class="narrowCell"><a href={ "newSignups/restaurant/" + restaurant["restaurant_id"] }> { restaurant["name"] } </a></td>)
	      	cell.push(<td class="wideCell"> { restaurant["address"] } </td>)
	      	cell.push(<td class="narrowCell"> { numProgramsPairedWith } </td>)
	      	if (restaurantsCheckboxStatus) {
		      	restaurantsCheckbox.push(<input type="checkbox"
		      									name={ restaurant["restaurant_id"] }
		      									defaultChecked={this.state.restaurantsChecked[restaurant["restaurant_id"]]}
	    	  							  		onChange={ this.handleRestaurantChange }></input>)
	    	}
	      	cell.push(<td class="narrowCell"> {restaurantsCheckbox[i] } </td>)
	      	rows2.push(<tr id={ oddOrEven }> { cell } </tr>)
	    }

		return (
			<div id="pairings">
				<Sidebar />
				<div class="jumbotron jumbotron-fluid">
				  <div class="container">
				    <h1 class="display-4">Pairings</h1>
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
					{ rows1 }
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
					{ rows2 }
				</table>

				<div class="pairButton">
					<a class="btn btn-info btn1" onClick = {() => this.submitPairing(programsCheckbox, restaurantsCheckbox) }>Submit Pairing</a>
				</div>

				<div id="footer"></div>
			</div>
		)
	}
}

export default Pairing;