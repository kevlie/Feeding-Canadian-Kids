import React from "react";
import Sidebar from "./Sidebar";
import "./Restaurants.css";

class Restaurants extends React.PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			//values: [[{"id": 1, "name": "name1", "address": "address1"}, {"id": 2, "name": "name2", "address": "address2"}], 
			//		 [{"id": 1, "name": "name1", "address": "address1"}, {"id": 2, "name": "name2", "address": "address2"}, {"id": 3, "name": "name3", "address": "address3"}]],
			restaurants: []
		}
	}

	componentDidMount = () => {
		fetch("http://localhost:9000/api/admin/restaurants")
			.then((res) => res.json())
			.then((restaurants) => this.setState({restaurants}))
			.then(() => this.updateState())
	}

	updateState() {
		if (this.state.restaurants) {
			this.setState({
				numRestaurants: this.state.restaurants.length
			})
		}
	}

	render() {
		var oddOrEven = "even";
		var indices = this.state.restaurantIndices;

		const numRestaurants = this.state.numRestaurants;

		var rows1 = []

	    for (var i = 0; i < numRestaurants; i++) {
			oddOrEven === "even" ? oddOrEven = "odd" : oddOrEven = "even";
	      	var cell = []
	      	var restaurant = this.state.restaurants[i]
	      	cell.push(<td><a href={ "restaurant/" + restaurant["restaurant_id"] }> { restaurant["name"] } </a></td>)
	      	cell.push(<td> { restaurant["address"] } </td>)
	      	rows1.push(<tr id={ oddOrEven }> { cell } </tr>)
	    }

		return (
			<div id="restaurants">
				<Sidebar />
				<div class="jumbotron jumbotron-fluid">
				  <div class="container">
				    <h1 class="display-4">Restaurants</h1>
				    <p class="lead">Following table lists the restaurants signed-up with Feeding Canadian Kids</p>
				  </div>
				</div>

				<h3 class="tableHeadings">Restaurants</h3>

				<table id="restaurantTable">
					<tr>
						<th id="tableHeader">
							Restaurant Name
						</th>
						<th id="tableHeader">
							Restaurant Address
						</th>
					</tr>
					{ rows1 }
				</table>

				<div id="footer"></div>
			</div>
		)
	}
}

export default Restaurants;
