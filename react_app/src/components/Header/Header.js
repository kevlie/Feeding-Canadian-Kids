import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Container, Row, Col, Image} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import FeedingCKbanner from '../../img/FeedingCK-banner.png';
import { sign_in } from "../../redux/actions";
import "./Header.css";

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
      {/* <Container fluid className="banner-container no-scroll">
                <Row>
                    <Col lg={7} fluid>
                        <Image className = "banner-image" src = {FeedingCKbanner}></Image>
                    </Col>
                    <Col lg={5}>

                    </Col>
                </Row>
      </Container> */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={e => this.props.history.push("/")}>
          <Image className = "banner-image" src = {FeedingCKbanner}></Image>
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
      </>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Header));
