import React from "react";
import Sidebar from "./Sidebar";
import "./NewSignupsCourierInfo.css";

class NewSignupsCourierInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			courier: [[]]
		}
	}

	componentDidMount = () => {
		const newId = this.props.match.params.id;
		const fetchURL = "http://localhost:9000/api/admin/newSignups/courier/" + newId;
		fetch(fetchURL)
			.then((res) => res.json())
			.then((courier) => this.setState({courier}, () => console.log(this.state.courier)))
	}

	approveApp = () => {
		const newId = this.props.match.params.id;
		const fetchURL = "http://localhost:9000/api/admin/newSignups/courier/" + newId + "/approve";
		fetch(fetchURL, {
	      method: "post",
	    })
	}

	rejectApp = () => {
		const newId = this.props.match.params.id;
		const fetchURL = "http://localhost:9000/api/admin/newSignups/courier/" + newId + "/reject";
		fetch(fetchURL, {
	      method: "post",
	    })
	}

	render() {
		return (
			<div id="newSignupsCourierInfo">
				<div>
				<Sidebar />
				</div>
				<div class="jumbotron jumbotron-fluid infoTitle">
				  <div class="container">
				    <h1 class="display-5 courierName">Courier Name: { this.state.courier[0]["name"] }</h1>
				  </div>
				</div>

				<table id="courierTable">
					<tr id="even">
						<td class="narrow">
							Applicant Name
						</td>
						<td class="wide">
							{ this.state.courier[0]["applicant_name"]}
						</td>
					</tr>
					<tr id="even">
						<td class="narrow">
							Applicant Email
						</td>
						<td class="wide">
							{ this.state.courier[0]["applicant_email"]}
						</td>
					</tr>
					<tr id="even">
						<td class="narrow">
							Discovery Info
						</td>
						<td class="wide">
							{ this.state.courier[0]["discovery_info"]}
						</td>
					</tr>
					<tr id="odd">
						<td class="narrow">
							Extra Info
						</td>
						<td class="wide">
							{ this.state.courier[0]["extra_info"]}
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

export default NewSignupsCourierInfo;