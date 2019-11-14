import React from "react";
import Sidebar from "./Sidebar";
import "./NewSignups.css";

class NewSignups extends React.PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			values: [[], []]
		}
	}

	addIndices = () => {
		var indices1 = []
		var i = 0

		var indices2 = []
		var j = 0

		this.state.values[0].map(function(item) {
			indices1.push(i)
			i++
		})

		this.state.values[1].map(function(item) {
			indices2.push(j)
			j++
		})

		this.setState({
			programIndices: indices1,
			restaurantIndices: indices2
		})
	}

	componentDidMount = () => {
		fetch("http://localhost:9000/api/admin/newSignups")
			.then((res) => res.json())
			.then((values) => this.setState({values}))
			.then(() => this.updateState())
	}

	updateState() {
		if (this.state.values[0]) {
			this.setState({
				numPrograms: this.state.values[0].length
			})
		}
		if (this.state.values[1]) {
			this.setState({
				numRestaurants: this.state.values[1].length
			})
		}
	}

	render() {
		var oddOrEven = "even";
		var indices = this.state.restaurantIndices;

		const numPrograms = this.state.numPrograms;
		const numRestaurants = this.state.numRestaurants;

		var rows1 = []
		var rows2 = []

	    for (var i = 0; i < numPrograms; i++) {
			oddOrEven === "even" ? oddOrEven = "odd" : oddOrEven = "even";
	      	var cell = []
	      	var program = this.state.values[0][i]
	      	cell.push(<td><a href={ "newSignups/program/" + program["program_id"] }> { program["name"] } </a></td>)
	      	cell.push(<td> { program["address"] } </td>)
	      	rows1.push(<tr id={ oddOrEven }> { cell } </tr>)
	    }

	    oddOrEven = "even";

	  	for (var i = 0; i < numRestaurants; i++) {
			oddOrEven === "even" ? oddOrEven = "odd" : oddOrEven = "even";
	      	var cell = []
	      	var restaurant = this.state.values[1][i]
	      	cell.push(<td><a href={ "newSignups/restaurant/" + restaurant["restaurant_id"] }> { restaurant["name"] } </a></td>)
	      	cell.push(<td> { restaurant["address"] } </td>)
	      	rows2.push(<tr id={ oddOrEven }> { cell } </tr>)
	    }

		return (
			<div id="newSignups">
				<Sidebar />
				<div class="jumbotron jumbotron-fluid">
				  <div class="container">
				    <h1 class="display-4">New Signups</h1>
				    <p class="lead">Following tables list the programs and restaurants who have requested
				    				to join Feeding Canadian Kids</p>
				  </div>
				</div>

				<h3 class="tableHeadings">New Program Signups</h3>

				<table id="programTable">
					<tr>
						<th id="tableHeader">
							Program Name
						</th>
						<th id="tableHeader">
							Program Address
						</th>
					</tr>
					{ rows1 }
				</table>

				<h3 class="tableHeadings">New Restaurant Signups</h3>

				<table id="restaurantTable">
					<tr>
						<th id="tableHeader">
							Restaurant Name
						</th>
						<th id="tableHeader">
							Restaurant Address
						</th>
					</tr>
					{ rows2 }
				</table>

				<div id="footer"></div>
			</div>
		)
	}
}

export default NewSignups;