import React from "react";
import Sidebar from "./Sidebar";
import "./Admin.css";

class Admin extends React.Component {
	render() {
		return (
			<div>
				<Sidebar />
				<div class="jumbotron jumbotron-fluid">
				  <div class="container">
				    <h1 class="display-4">Welcome Admin</h1>
				    <p class="lead">This is the Admin's Portal. Here you can manage new partner
				    				sign up requests, view existing partners' info, and pair 
				    				a program partner with a restaurant.</p>
				  </div>
				</div>

				<div class="first tab">
					<div id="number" class="programText">10</div>
					<div id="program" class="programText">Active Programs</div>
				</div>

				<div class="tab">
					<div id="number" class="programText">20</div>
					<div id="program" class="programText">Active Restaurants</div>
				</div>

				<div class="tab">
					<div id="number" class="programText">4</div>
					<div id="program" class="programText">New Programs</div>
				</div>

				<div class="tab">
					<div id="number" class="programText">4</div>
					<div id="program" class="programText">New Restaurants</div>
				</div>
			</div>
		)
	}
}

export default Admin;
