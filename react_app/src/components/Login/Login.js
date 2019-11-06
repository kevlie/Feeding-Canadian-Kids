import React, { useState } from "react";
import { Route, Redirect } from "react-router";
import { Form, Button } from "react-bootstrap";
import "./Login.css";
import { sign_in } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

const hash = require("object-hash");

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginApiCall = data => {
    fetch("http://localhost:9000/api/auth/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(data)
    })
      .then(res => res.text())
      .then(res => {
        if (res === "Credentials valid. Log in successful.") {
          props.dispatch(sign_in());
          props.history.push("/");
        } else {
          setError("Error");
        }
      }); // store the result in this.state.apiResponse
  };

  // todo just for testing 
  // const verifyLoginApi = () => {
  //   fetch("http://localhost:9000/api/auth/validate-login", {
  //     method: "get",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     },
  //     credentials: "include",
  //   }).then((res) => {
  //     console.log(res.text())
  //   })
  // };

  function handleLogin(e) {
    e.preventDefault();
    loginApiCall({ contactEmail: email, passwordHash: hash(password) });
    // setTimeout(verifyLoginApi, 4000) // todo delete this later
  }

  function handleProgram(e) {
    e.preventDefault();
    props.history.push("/programRegistration");
  }

  function handleRestaurant(e) {
    e.preventDefault();
    props.history.push("/restaurantRegistration");
  }

  return (
    <div className="page">
      <div className="loginForm">
        <em>
          For testing: program/program or restaurant/restaurant or admin/admin>
        </em>
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
          <Button
            style={{ marginRight: "20px" }}
            variant="primary"
            type="submit"
            onClick={handleProgram}
          >
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

export default withRouter(connect(mapStateToProps)(Login));