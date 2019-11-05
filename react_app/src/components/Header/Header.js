import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
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
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={e => this.props.history.push("/")}>
          FCK2
        </Navbar.Brand>
        <Nav className="ml-auto">
          {!this.props.isLoggedIn ? (
            <Nav.Link
              onClick={e => {
                this.props.history.push("/login");
                // if sign in is successful .. this.props.dispatch(sign_in());
              }}
            >
              Login / Register
            </Nav.Link>
          ) : (
            <NavDropdown title="USERNAME" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
            </NavDropdown>
          )}
        </Nav>
      </Navbar>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Header));
