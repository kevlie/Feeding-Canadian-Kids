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
  }

  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand onClick={e => this.props.history.push("/")}>
            <Image className="banner-image" src={FeedingCKbanner}></Image>
          </Navbar.Brand>
          <Nav className="ml-auto">
            {!this.props.isLoggedIn ? (
              <Nav.Link
                onClick={e => {
                  this.props.history.push("/login");
                }}
              >
                Login / Register
              </Nav.Link>
            ) : (
                <NavDropdown title="SIGNED IN" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.3"
                    onClick={e => {
                      this.props.dispatch(sign_in());
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

const checkLoginApiCall = () => {
  fetch("http://localhost:9000/api/auth/validate-login", {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    credentials: "include",
  }).then(res => {
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  })
};