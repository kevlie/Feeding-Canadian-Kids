import React, { useState } from "react";

import { Container } from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import "./Login.css";
import { withRouter } from "react-router-dom";
import FeedingCKkids from "../../img/FeedingCK-kids.png";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

const hash = require("object-hash");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      error: "",
      partnerType: ""
    };
  }

  render() {
    const loginApiCall = data => {
      if (this.state.isLoggedIn) {
        this.setState({
          error: "You are already logged in!"
        });
      } else {
        fetch(express_server + "/api/auth/login", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include",
          body: JSON.stringify(data)
        }).then(response => {
          if (response.status !== 200) {
            this.setState({ error: "Invalid Username or Password" });
          }
          response.json().then(resJSON => {
            if (resJSON.email) {
              let state = {
                isLoggedIn: true,
                email: resJSON.email,
                partnerType: resJSON.partnerType
              };
              this.setState(state);
              if (resJSON.partnerType === "program" && resJSON.activeStatus === 1) {
                this.props.history.push("/programuserpage");
                window.location.reload();
              } else if (resJSON.partnerType === "restaurant" && resJSON.activeStatus === 1) {
                this.props.history.push("/restaurantuserpage", state);
                window.location.reload();
              } else if (resJSON.partnerType === "courier" && resJSON.activeStatus === 1) {
                this.props.history.push("/courieruserpage", state);
                window.location.reload();
              } else if (resJSON.partnerType === "admin") {
                this.props.history.push("/admin");
                window.location.reload();
              } else if (resJSON.activeStatus === 0) {
                this.props.history.push("/pendingapproval")
                window.location.reload();
              }
            } else {
              this.setState({
                error: "Unknown Error"
              });
            }
          });
        });
      }
    };

    const handleLogin = e => {
      e.preventDefault();
      loginApiCall({
        contactEmail: this.state.email,
        passwordHash: hash(this.state.password)
      });
    };

    const handleProgram = e => {
      e.preventDefault();
      this.props.history.push("/programRegistration");
    };

    const handleRestaurant = e => {
      e.preventDefault();
      this.props.history.push("/restaurantRegistration");
    };

    const handleCourier = e => {
      e.preventDefault();
      this.props.history.push("/courierRegistration");
    };

    return (
      <Container id="login">
        <div className="page">
          <div className="card">
            <div className="loginForm">
              <h5>
                Interested in joining us as a Feeding Canadian Kids partner?
                That’s great! Whether you’re a program in need of meals, a
                restaurant able to donate meals or a courier hoping to connect
                the two. You’re at the right place!
              </h5>
              <br></br>
              <em>
                If you already have a Feeding Canadian Kids profile, please log
                in with your credentials.
              </em>
              <br></br>
              <p className="error">{this.state.error}</p>

              <div>
                <TextField
                  name="email"
                  label="Email"
                  margin="normal"
                  className="textfield"
                  value={this.state.email}
                  onChange={e => {
                    this.setState({
                      email: e.target.value.toString()
                    });
                  }}
                />

                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  margin="normal"
                  className="textfield"
                  value={this.state.password}
                  onChange={e => {
                    this.setState({
                      password: e.target.value.toString()
                    });
                  }}
                />
              </div>
              <Button
                variant="contained"
                type="submit"
                className="loginButton"
                style={{
                  marginTop: "10px",
                  marginBottom: "10px"
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <br></br>
              <div className="buttonGroup">
                <Button
                  variant="outlined"
                  size="small"
                  type="submit"
                  className="registerButton"
                  onClick={handleProgram}
                >
                  Register as a Program
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  type="submit"
                  className="registerButton"
                  onClick={handleRestaurant}
                >
                  Register as a Restaurant
                </Button>
                <Button
                  variant="outlined"
                  type="submit"
                  size="small"
                  className="registerButton"
                  onClick={handleCourier}
                >
                  Register as a Courier
                </Button>
              </div>
              {/* </Form> */}
            </div>
          </div>
          <div className="FCKimg">
            <img src={FeedingCKkids} />
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(Login);
