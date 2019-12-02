import React from "react";
import Sidebar from "./Sidebar";
import "./NewSignupsProgramInfo.css";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

class NewSignupsProgramInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			program: [[]]
		}
	}

	componentDidMount = () => {
		const newId = this.props.match.params.id;
		const fetchURL = express_server + "/api/admin/newSignups/program/" + newId;
		//const fetchURL = express_server + "/api/admin/newSignups/program/7";
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

	approveApp = () => {
		const newId = this.props.match.params.id;
		const fetchURL = express_server + "/api/admin/newSignups/program/" + newId + "/approve";
		fetch(fetchURL, {
			method: "post",
		})
	}

	rejectApp = () => {
		const newId = this.props.match.params.id;
		const fetchURL = express_server + "/api/admin/newSignups/program/" + newId + "/reject";
		fetch(fetchURL, {
			method: "post",
		})
	}

	render() {
		return (
			<>
				{!this.state.fail ? (
					<div id="newSignupsProgramInfo">
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
									Applicant Name
						</td>
								<td class="wide">
									{this.state.program[0]["applicant_name"]}
								</td>
							</tr>
							<tr id="odd">
								<td class="narrow">
									Applicant Phone
						</td>
								<td class="wide">
									{this.state.program[0]["applicant_phone"]}
								</td>
							</tr>
							<tr id="even">
								<td class="narrow">
									Applicant Email
						</td>
								<td class="wide">
									{this.state.program[0]["applicant_email"]}
								</td>
							</tr>
							<tr id="odd">
								<td class="narrow">
									Dinner Needs
						</td>
								<td class="wide">
									{this.state.program[0]["dinner_needs"]}
								</td>
							</tr>
							<tr id="even">
								<td class="narrow">
									In-Kind Support
						</td>
								<td class="wide">
									{this.state.program[0]["in_kind_support"]}
								</td>
							</tr>
							<tr id="odd">
								<td class="narrow">
									Discovery Info
						</td>
								<td class="wide">
									{this.state.program[0]["discovery_info"]}
								</td>
							</tr>
							<tr id="even">
								<td class="narrow">
									Preferred Time
						</td>
								<td class="wide">
									{this.state.program[0]["preferred_time"]}
								</td>
							</tr>
							<tr id="odd">
								<td class="narrow">
									Extra Info
						</td>
								<td class="wide">
									{this.state.program[0]["extra_info"]}
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

export default NewSignupsProgramInfo;
