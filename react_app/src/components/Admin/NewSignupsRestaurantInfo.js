import React from "react";
import Sidebar from "./Sidebar";
import "./NewSignupsRestaurantInfo.css";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

class NewSignupsRestaurantInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			restaurant: [[]]
		}
	}

	componentDidMount = () => {
		const newId = this.props.match.params.id;
		const fetchURL = express_server + "/api/admin/newSignups/restaurant/" + newId;
		//const fetchURL = express_server + "/api/admin/newSignups/restaurant/7";
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

	approveApp = () => {
		const newId = this.props.match.params.id;
		const fetchURL = express_server + "/api/admin/newSignups/restaurant/" + newId + "/approve";
		fetch(fetchURL, {
			method: "post",
		})
	}

	rejectApp = () => {
		const newId = this.props.match.params.id;
		const fetchURL = express_server + "/api/admin/newSignups/restaurant/" + newId + "/reject";
		fetch(fetchURL, {
			method: "post",
		})
	}

	render() {
		return (
			<>
				{!this.state.fail ? (
					<div id="newSignupsRestaurantInfo">>
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
									Dinner Needs
						</td>
								<td class="wide">
									{this.state.restaurant[0]["dinner_needs"]}
								</td>
							</tr>
							<tr id="odd">
								<td class="narrow">
									In-Kind Support
						</td>
								<td class="wide">
									{this.state.restaurant[0]["in_kind_support"]}
								</td>
							</tr>
							<tr id="even">
								<td class="narrow">
									Discovery Info
						</td>
								<td class="wide">
									{this.state.restaurant[0]["discovery_info"]}
								</td>
							</tr>
							<tr id="odd">
								<td class="narrow">
									Preferred Time
						</td>
								<td class="wide">
									{this.state.restaurant[0]["preferred_time"]}
								</td>
							</tr>
							<tr id="even">
								<td class="narrow">
									Applicant Name
						</td>
								<td class="wide">
									{this.state.restaurant[0]["applicant_name"]}
								</td>
							</tr>
							<tr id="odd">
								<td class="narrow">
									Applicant Phone
						</td>
								<td class="wide">
									{this.state.restaurant[0]["applicant_phone"]}
								</td>
							</tr>
							<tr id="even">
								<td class="narrow">
									Applicant Email
						</td>
								<td class="wide">
									{this.state.restaurant[0]["applicant_email"]}
								</td>
							</tr>
						</table>
						<div class="appButtons">
							<a href="/admin/newSignups" class="btn btn-info btn1" onClick={this.approveApp}>Approve Application</a>
							<a href="/admin/newSignups" class="btn btn-info" onClick={this.rejectApp}>Reject Application</a>
						</div>
					</div>
				) : (
						<h4> You do not have the permissions to access this page.</h4>
					)}
			</>
		)
	}
}

export default NewSignupsRestaurantInfo;
