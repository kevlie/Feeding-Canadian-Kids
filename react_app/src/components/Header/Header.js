import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Image } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import FeedingCKbanner from "../../img/FeedingCK-banner.png";
import "./Header.css";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;


const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      error: "",
      partnerType: "",
      isAdmin: "",
      activeStatus: 0
    };
  }

  setLoginStatus() {
    fetch(express_server + "/api/auth/validate-login", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then(response => {
      if (response.status === 200 || response.status === 304) {
        response.json().then(resJSON => {
          if (resJSON.email) {
            let state = {
              isLoggedIn: true,
              email: resJSON.email,
              partnerType: resJSON.partnerType,
              isAdmin: resJSON.isAdmin,
              activeStatus: resJSON.activeStatus
            };
            this.setState(state);
          } else {
          }
        });
      }
    });
  }

  logout() {
    fetch(express_server + "/api/auth/logout", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then(res => {
      if (res.status === 200) {
        console.log("loggedout");
        this.setState({ isLoggedIn: false });
        this.props.history.push("/login");
        window.location.reload();
      }
    });
  }

  changePassword() {
    this.props.history.push("/changepassword");
    window.location.reload();
  }

  componentDidMount() {
    this.setLoginStatus();
  }

  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand onClick={e => this.props.history.push("/")}>
            <Image className="banner-image" src={FeedingCKbanner}></Image>
          </Navbar.Brand>
          <Nav className="ml-auto">
            {!this.state.isLoggedIn ? (
              <Nav.Link
                className="loginlink"
                onClick={e => {
                  this.props.history.push("/login");
                }}
              >
                Login / Register
              </Nav.Link>
            ) : (
              <NavDropdown alignRight title={this.state.email} id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={e => {
                    let state = { email: this.state.email };
                    if (this.state.partnerType === "restaurant") {
                      this.state.activeStatus === 1
                        ? this.props.history.push("/restaurantuserpage", state)
                        : this.props.history.push("/pendingapproval");
                    } else if (this.state.partnerType === "program") {
                      this.state.activeStatus === 1
                        ? this.props.history.push("/programuserpage")
                        : this.props.history.push("/pendingapproval");
                    } else if (this.state.partnerType === "courier") {
                      this.state.activeStatus === 1
                        ? this.props.history.push("/courieruserpage", state)
                        : this.props.history.push("/pendingapproval");
                    } else {
                      this.props.history.push("admin");
                    }
                  }}
                >
                  Profile
                </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={e => {
                      this.changePassword();
                    }}
                  >
                    Change Password
              </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={e => {
                      this.logout();
                    }}
                  >
                    Log Out
                </NavDropdown.Item>
                </NavDropdown>
              )}
          </Nav>
        </Navbar>
      </>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Header));
