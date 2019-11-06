import React from "react";
import Sidebar from "./Sidebar";
import "./NewSignups.css";

class NewSignups extends React.Component {
	render() {
		return (
			<div>
				<Sidebar />
				<div class="jumbotron jumbotron-fluid">
				  <div class="container">
				    <h1 class="display-4">New Signups</h1>
				    <p class="lead">Following tables list the programs and restaurants who have requested
				    				to join Feeding Canadian Kids</p>
				  </div>
				</div>

				<table id="programTable">
					<tr>
						<th>
							Program Name
						</th>
						<th>
							Program Address
						</th>
					</tr>
					<tr>
						<td>Program 1</td>
						<td>27 King's College Circle</td>
					</tr>
					<tr>
						<td>Program 1</td>
						<td>27 King's College Circle</td>
					</tr>
				</table>

				<table id="restaurantTable">
					<tr>
						<th>
							Restaurant Name
						</th>
						<th>
							Restaurant Address
						</th>
					</tr>
					<tr>
						<td>Restaurant 1</td>
						<td>27 King's College Circle</td>
					</tr>
					<tr>
						<td>Restaurant 1</td>
						<td>27 King's College Circle</td>
					</tr>
				</table>
			</div>
		)
	}
}

export default NewSignups;
