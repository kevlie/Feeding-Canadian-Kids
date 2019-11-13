import React from "react";
import Sidebar from "./Sidebar";
import "./Programs.css";

class Programs extends React.PureComponent {

	constructor(props) {
		super(props)
		this.state = {
			//values: [[{"id": 1, "name": "name1", "address": "address1"}, {"id": 2, "name": "name2", "address": "address2"}], 
			//		 [{"id": 1, "name": "name1", "address": "address1"}, {"id": 2, "name": "name2", "address": "address2"}, {"id": 3, "name": "name3", "address": "address3"}]],
			programs: []
		}
	}

	componentDidMount = () => {
		fetch("http://localhost:9000/api/admin/programs")
			.then((res) => res.json())
			.then((programs) => this.setState({programs}))
			.then(() => this.updateState())
	}

	updateState() {
		if (this.state.programs) {
			this.setState({
				numPrograms: this.state.programs.length
			})
		}
	}

	render() {
		var oddOrEven = "even";
		var indices = this.state.restaurantIndices;

		const numPrograms = this.state.numPrograms;

		var rows1 = []

	    for (var i = 0; i < numPrograms; i++) {
			oddOrEven === "even" ? oddOrEven = "odd" : oddOrEven = "even";
	      	var cell = []
	      	var program = this.state.programs[i]
	      	cell.push(<td><a href={ "program/" + program["program_id"] }> { program["name"] } </a></td>)
	      	cell.push(<td> { program["address"] } </td>)
	      	rows1.push(<tr id={ oddOrEven }> { cell } </tr>)
	    }

		return (
			<div id="programs">
				<Sidebar />
				<div class="jumbotron jumbotron-fluid">
				  <div class="container">
				    <h1 class="display-4">Programs</h1>
				    <p class="lead">Following table lists the programs signed-up with Feeding Canadian Kids</p>
				  </div>
				</div>

				<h3 class="tableHeadings">Programs</h3>

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

				<div id="footer"></div>
			</div>
		)
	}
}

export default Programs;
