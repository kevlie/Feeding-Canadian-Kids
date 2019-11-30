import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Image } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import FeedingCKbanner from "../../img/FeedingCK-banner.png";
import "./Header.css";
import { sign_in } from "../../redux/actions";

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
      isAdmin: ""
    };
  }

  setLoginStatus() {
    fetch("http://localhost:9000/api/auth/validate-login", {
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
              isAdmin: resJSON.isAdmin
            };
            this.setState(state);
          }
        });
      }
    });
  }

  logout() {
    fetch("http://localhost:9000/api/auth/logout", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    }).then(res => {
      if (res.status === 200 || res.status === 304) {
        let state = {
          isLoggedIn: false,
          email: ""
        };
        this.setState(state);
      }
    });
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
                onClick={e => {
                  this.props.history.push("/login");
                }}
              >
                Login / Register
              </Nav.Link>
            ) : (
              <NavDropdown title={this.state.email} id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={e => {
                    let state = { email: this.state.email };
                    if (this.state.partnerType === "restaurant") {
                      this.props.history.push("/restaurantuserpage", state);
                    } else if (this.state.partnerType === "program") {
                      this.props.history.push("programuserpage");
                    } else {
                      this.props.history.push("courieruserpage", state);
                    }
                  }}
                >
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  onClick={e => {
                    this.logout();
                    this.props.history.push("/login");
                    window.location.reload();
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
