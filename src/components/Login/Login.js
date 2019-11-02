import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";
import "./Login.css";

function Login(props){
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	function checkValidation(){
		let validate=false;
		if (email==="admin" && password==="admin"){validate=true}
		else if (email==="user" && password==="user"){validate=true}
		return validate
	}
	function handleLogin(e){
		e.preventDefault();
		if (!checkValidation()){setError("invalid email or password!")}
		//else{//direct to the user page or admin page }
	}

	return (
		<div className="page">
		<div className='loginForm'>
			<p>For testing: user/user or admin/admin></p>
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
			    Submit
			  </Button>
			</Form>
      </div>
      </div>
	);
}

export default Login;
