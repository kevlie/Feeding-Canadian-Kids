import React from "react";
import Sidebar from "./Sidebar";
import "./NewSignupsRestaurantInfo.css";

class NewSignupsRestaurantInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			restaurant: []
			//restaurant: [{"name": "Dhruv", "discovery_info": "Website", "extra_info": "NAH", "in_kind_support": "Not at all",
			//		   "dinner_needs": "need food", "applicant_name": "Dhruv", "applicant_phone": "123", 
			//		   "applicant_email": "a@mail.com", "preferred_time": "morning"}]
		}
	}

	componentDidMount = () => {
		const newId = this.props.match.params.id;
		const fetchURL = "http://localhost:9000/api/admin/newSignups/restaurant/" + newId;
		//const fetchURL = "http://localhost:9000/api/admin/newSignups/restaurant/7";
		fetch(fetchURL)
			.then((res) => res.json())
			.then((restaurant) => this.setState({restaurant}, () => console.log(this.state.restaurant)))
	}

	render() {
		return (
			<div>
				<div>
				<Sidebar />
				</div>
				<div class="jumbotron jumbotron-fluid infoTitle">
				  <div class="container">
				    <h1 class="display-5 restaurantName">Restaurant Name: { this.state.restaurant[0]["name"] }</h1>
				  </div>
				</div>

				<table id="restaurantTable">
					<tr id="even">
						<td class="narrow">
							Dinner Needs
						</td>
						<td class="wide">
							{ this.state.restaurant[0]["dinner_needs"]}
						</td>
					</tr>
					<tr id="odd">
						<td class="narrow">
							In-Kind Support
						</td>
						<td class="wide">
							{ this.state.restaurant[0]["in_kind_support"]}
						</td>
					</tr>
					<tr id="even">
						<td class="narrow">
							Discovery Info
						</td>
						<td class="wide">
							{ this.state.restaurant[0]["discovery_info"]}
						</td>
					</tr>
					<tr id="odd">
						<td class="narrow">
							Preferred Time
						</td>
						<td class="wide">
							{ this.state.restaurant[0]["preferred_time"]}
						</td>
					</tr>
					<tr id="even">
						<td class="narrow">
							Applicant Name
						</td>
						<td class="wide">
							{ this.state.restaurant[0]["applicant_name"]}
						</td>
					</tr>
					<tr id="odd">
						<td class="narrow">
							Applicant Phone
						</td>
						<td class="wide">
							{ this.state.restaurant[0]["applicant_phone"]}
						</td>
					</tr>
					<tr id="even">
						<td class="narrow">
							Applicant Email
						</td>
						<td class="wide">
							{ this.state.restaurant[0]["applicant_email"]}
						</td>
					</tr>
				</table>
			</div>
		)
	}
}

export default NewSignupsRestaurantInfo;