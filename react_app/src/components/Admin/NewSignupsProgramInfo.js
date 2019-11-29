import React from "react";
import Sidebar from "./Sidebar";
import "./NewSignupsProgramInfo.css";

class NewSignupsProgramInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			program: [[]]
			//program: [{"name": "Dhruv", "discovery_info": "Website", "extra_info": "NAH", "in_kind_support": "Not at all",
			//		   "dinner_needs": "need food", "applicant_name": "Dhruv", "applicant_phone": "123", 
			//		   "applicant_email": "a@mail.com", "preferred_time": "morning"}]
		}
	}

	componentDidMount = () => {
		const newId = this.props.match.params.id;
		const fetchURL = "http://localhost:9000/api/admin/newSignups/program/" + newId;
		//const fetchURL = "http://localhost:9000/api/admin/newSignups/program/7";
		fetch(fetchURL)
			.then((res) => res.json())
			.then((program) => this.setState({program}, () => console.log(this.state.program)))
	}

	approveApp = () => {
		const newId = this.props.match.params.id;
		const fetchURL = "http://localhost:9000/api/admin/newSignups/program/" + newId + "/approve";
		fetch(fetchURL, {
	      method: "post",
	    })
	}

	rejectApp = () => {
		const newId = this.props.match.params.id;
		const fetchURL = "http://localhost:9000/api/admin/newSignups/program/" + newId + "/reject";
		fetch(fetchURL, {
	      method: "post",
	    })
	}

	render() {
		return (
			<div id="newSignupsProgramInfo">
				<div>
				<Sidebar />
				</div>
				<div class="jumbotron jumbotron-fluid infoTitle">
				  <div class="container">
				    <h1 class="display-5 programName">Program Name: { this.state.program[0]["name"] }</h1>
				  </div>
				</div>

				<table id="programTable">
					<tr id="even">
						<td class="narrow">
							Dinner Needs
						</td>
						<td class="wide">
							{ this.state.program[0]["dinner_needs"]}
						</td>
					</tr>
					<tr id="odd">
						<td class="narrow">
							In-Kind Support
						</td>
						<td class="wide">
							{ this.state.program[0]["in_kind_support"]}
						</td>
					</tr>
					<tr id="even">
						<td class="narrow">
							Discovery Info
						</td>
						<td class="wide">
							{ this.state.program[0]["discovery_info"]}
						</td>
					</tr>
					<tr id="odd">
						<td class="narrow">
							Preferred Time
						</td>
						<td class="wide">
							{ this.state.program[0]["preferred_time"]}
						</td>
					</tr>
					<tr id="even">
						<td class="narrow">
							Applicant Name
						</td>
						<td class="wide">
							{ this.state.program[0]["applicant_name"]}
						</td>
					</tr>
					<tr id="odd">
						<td class="narrow">
							Applicant Phone
						</td>
						<td class="wide">
							{ this.state.program[0]["applicant_phone"]}
						</td>
					</tr>
					<tr id="even">
						<td class="narrow">
							Applicant Email
						</td>
						<td class="wide">
							{ this.state.program[0]["applicant_email"]}
						</td>
					</tr>
				</table>
				<div class="appButtons">
					<a href="/admin/newSignups"class="btn btn-info btn1" onClick = { this.approveApp }>Approve Application</a>
					<a href="/admin/newSignups"class="btn btn-info" onClick = { this.rejectApp }>Reject Application</a>
				</div>
			</div>
		)
	}
}

export default NewSignupsProgramInfo;