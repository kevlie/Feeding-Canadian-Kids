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
						<td><a href="#">Program 1</a></td>
						<td>Example Address 1</td>
					</tr>
					<tr>
						<td><a href="#">Program 2</a></td>
						<td>Example Address 2</td>
					</tr>
					<tr>
						<td><a href="#">Program 3</a></td>
						<td>Example Address 3</td>
					</tr>
					<tr>
						<td><a href="#">Program 4</a></td>
						<td>Example Address 4</td>
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
						<td><a href="#">Restaurant 1</a></td>
						<td>Example Address 1</td>
					</tr>
					<tr>
						<td><a href="#">Restaurant 2</a></td>
						<td>Example Address 2</td>
					</tr>
					<tr>
						<td><a href="#">Restaurant 3</a></td>
						<td>Example Address 3</td>
					</tr>
					<tr>
						<td><a href="#">Restaurant 4</a></td>
						<td>Example Address 4</td>
					</tr>
				</table>
			</div>
		)
	}
}

export default NewSignups;
