import React from "react";
import Sidebar from "./Sidebar";
import "./ProgramInfo.css";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

class ProgramInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			program: [[]]
		}
	}

	componentDidMount = () => {
		const id = this.props.match.params.id;
		const fetchURL = express_server + "/api/admin/program/" + id;
		fetch(fetchURL)
			.then((res) => res.json())
			.then((program) => this.setState({ program }, () => console.log(this.state.program)))

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
		return (
			<>
				{!this.state.fail ? (
					<div id="programInfo">
						<div>
							<Sidebar />
						</div>
						<div class="jumbotron jumbotron-fluid infoTitle">
							<div class="container">
								<h1 class="display-5 programName">Program Name: {this.state.program[0]["name"]}</h1>
							</div>
						</div>

						<table id="programTable">
							<tr id="even">
								<td class="narrow">
									Address
						</td>
								<td class="wide">
									{this.state.program[0]["address"]}
								</td>
							</tr>
							<tr id="odd">
								<td class="narrow">
									Area
						</td>
								<td class="wide">
									{this.state.program[0]["area"]}
								</td>
							</tr>
							<tr id="even">
								<td class="narrow">
									Delivery Instructions
						</td>
								<td class="wide">
									{this.state.program[0]["delivery_instructions"]}
								</td>
							</tr>
							<tr id="odd">
								<td class="narrow">
									Phone
						</td>
								<td class="wide">
									{this.state.program[0]["phone"]}
								</td>
							</tr>
							<tr id="even">
								<td class="narrow">
									Email
						</td>
								<td class="wide">
									{this.state.program[0]["email"]}
								</td>
							</tr>
							<tr id="odd">
								<td class="narrow">
									Age Range
						</td>
								<td class="wide">
									{this.state.program[0]["age_range"]}
								</td>
							</tr>
							<tr id="even">
								<td class="narrow">
									Number of Kids
						</td>
								<td class="wide">
									{this.state.program[0]["num_kids"]}
								</td>
							</tr>
							<tr id="odd">
								<td class="narrow">
									Dietary Restrictions
						</td>
								<td class="wide">
									{this.state.program[0]["dietary_restrictions"]}
								</td>
							</tr>
						</table>

						<div id="footer"></div>
					</div>
				) : (
						<h4> You do not have the permissions to access this page.</h4>
					)}
			</>
		)
	}
}

export default ProgramInfo;
