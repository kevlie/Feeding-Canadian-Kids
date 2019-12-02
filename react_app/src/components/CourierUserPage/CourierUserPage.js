import React from "react";
import { Row, Col, Nav, Tab, Tabs } from "react-bootstrap";

import { withRouter } from "react-router-dom";
import WelcomeMessage from "./WelcomeMessage.js";
// import ProgramsPartners from "./ProgramsPartners.js";
import RestaurantPartners from "./RestaurantPartners.js";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

class CourierUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "default",
      hasAccess: false
    };
  }

  componentDidMount = () => {
    document.body.classList.add("hunnid");
    document.documentElement.classList.add("hunnid");

    fetch(express_server + "/api/courieruserpage/isCourier", {
      method: "get",
      credentials: "include"
    }).then(res => {
      if (res.status === 200) {
        this.setState({ hasAccess: true });
        console.log(this.state.hasAccess);
      }
      //   else {
      //     console.log(res);
      //   }
    });
    fetch(express_server + "/api/courieruserpage/name", {
      method: "get",

      credentials: "include"
    })
      .then(response => response.json())
      .then(json => {
        if (json.length > 0) {
          console.log("in");
          this.setState({ name: json[0].name });
        }
      });
  };

  componentWillUnmount() {
    document.body.classList.remove("hunnid");
    document.documentElement.classList.remove("hunnid");
  }

  render() {
    return (
      <>
        {!this.state.hasAccess ? (
          <h4> You do not have the permissions to access this page.</h4>
        ) : (
            <div>
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="first"
                className="no-scroll m-height"
              >
                <Row className="no-scroll">
                  <Col sm={2} className="pill-tabs-color trial">
                    <Nav variant="pills" className="flex-column pill-tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Home</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Your Restaurants</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={10} className="m-height">
                    <Tab.Content className="m-height">
                      <Tab.Pane eventKey="first" className="m-height">
                        <WelcomeMessage name={this.state.name} />
                      </Tab.Pane>

                      <Tab.Pane eventKey="third" className="m-height">
                        <RestaurantPartners />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          )}
      </>
    );
  }
}

export default withRouter(CourierUserPage);
