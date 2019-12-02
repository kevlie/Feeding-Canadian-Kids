import React from "react";
import Sidebar from "./Sidebar";
import "./RestaurantInfo.css";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

class RestaurantInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			restaurant: [[]]
		}
	}

	componentDidMount = () => {
		const id = this.props.match.params.id;
		const fetchURL = express_server + "/api/admin/restaurant/" + id;
		fetch(fetchURL)
			.then((res) => res.json())
			.then((restaurant) => this.setState({ restaurant }, () => console.log(this.state.restaurant)))

		fetch(express_server + "/api/admin/isAdmin", {
			method: "get",
			credentials: "include"
		}).then(res => {
			if (res.status != 200) {
				this.setState({ fail: true });
				console.log(this.state.fail);
			}
		});
	}

	render() {
		console.log(this.state.restaurant)
		return (
			<>
				{!this.state.fail ? (
					<div id="restaurantsInfo">
						<div>
							<Sidebar />
						</div>
						<div class="jumbotron jumbotron-fluid infoTitle">
							<div class="container">
								<h1 class="display-5 restaurantName">Restaurant Name: {this.state.restaurant[0]["name"]}</h1>
							</div>
						</div>

						<table id="restaurantTable">
							<tr id="even">
								<td class="narrow">
									Address
						</td>
								<td class="wide">
									{this.state.restaurant[0]["address"]}
								</td>
							</tr>
							<tr id="odd">
								<td class="narrow">
									Contact Person
						</td>
								<td class="wide">
									{this.state.restaurant[0]["contact_person"]}
								</td>
							</tr>
							<tr id="even">
								<td class="narrow">
									Contact Email
						</td>
								<td class="wide">
									{this.state.restaurant[0]["contact_email"]}
								</td>
							</tr>
							<tr id="odd">
								<td class="narrow">
									Phone
						</td>
								<td class="wide">
									{this.state.restaurant[0]["phone"]}
								</td>
							</tr>
							<tr id="even">
								<td class="narrow">
									Number of Meals
						</td>
								<td class="wide">
									{this.state.restaurant[0]["num_meals"]}
								</td>
							</tr>
						</table>
					</div>
				) : (
						<h4> You do not have the permissions to access this page.</h4>
					)}
			</>
		)
	}
}

export default RestaurantInfo;
