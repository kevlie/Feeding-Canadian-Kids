import React, {useState} from "react";
import { Route, Redirect } from 'react-router'
import {Form, Button} from "react-bootstrap";
import "./Login.css";

function Login(props){
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	function checkValidation(){
		let validate=false;
		if (email==="admin" && password==="admin"){validate=true}
		else if (email==="program" && password==="program"){validate=true}
		else if (email==="restaurant" && password==="restaurant"){validate=true}
		return validate
	}
	function handleLogin(e){
		e.preventDefault();
		if (!checkValidation()){setError("invalid email or password!")}
		//else if (email==="program" && password==="program"){
		// 	props.history.push(//program page)
		//}
	}

	function handleProgram(e){
		e.preventDefault();
		props.history.push("/programRegistration")
		
	}

	function handleRestaurant(e){
		e.preventDefault();
		props.history.push("/restaurantRegistration")
	}
	
	return (
		<div className="page">
			<div className='loginForm'>
				<em>For testing: program/program or restaurant/restaurant or admin/admin></em>
				<p className="error">{error}</p>
				<Form>
				  <Form.Group controlId="formBasicEmail">
				    <Form.Label>Email</Form.Label>
				    <Form.Control 
				    	autoFocus
				    	type="text" 
				    	placeholder="Enter your email"
				    	value={email}
				    	onChange={e => setEmail(e.target.value)}
				    />
				  </Form.Group>

				  <Form.Group controlId="formBasicPassword">
				    <Form.Label>Password</Form.Label>
				    <Form.Control 
				    	type="password" 
				    	placeholder="Enter your password"
				    	value={password}
				    	onChange={e => setPassword(e.target.value)}
				    />
				  </Form.Group>

				  <Button variant="primary" type="submit" onClick={handleLogin}>
				    Login
				  </Button>
				  <p className="newuser">New User? Register Now!</p>
				  <Button style={{marginRight: "20px"}}variant="primary" type="submit" onClick={handleProgram}>
				    Register as a Program
				  </Button>
				  <Button variant="primary" type="submit" onClick={handleRestaurant}>
				    Register as a Restaurant
				  </Button>
				</Form>
	      </div>
      </div>
	);
}

export default Login;
