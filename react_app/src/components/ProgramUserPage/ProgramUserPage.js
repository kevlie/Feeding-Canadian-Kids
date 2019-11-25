import React from "react";
import { Row, Col, Nav, Tab } from "react-bootstrap";

import Deliveries from "./Deliveries";
import WelcomeMessage from "./WelcomeMessage.js";
import RestaurantsPartners from "./RestaurantsPartners.js";
import ProgramTraining from "./ProgramTraining.js";
import "./ProgramUserPage.css";

class ProgramUserPage extends React.Component {
  componentDidMount() {
    document.body.classList.add("hunnid");
    document.documentElement.classList.add("hunnid");
  }

  componentWillUnmount() {
    document.body.classList.remove("hunnid");
    document.documentElement.classList.remove("hunnid");
  }

  render() {
    return (
      <>
        <div className="trial">
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey="first"
            className="no-scroll m-height"
          >
            <Row className="no-scroll m-height">
              <Col sm={2} className="pill-tabs-color m-height">
                <Nav variant="pills" className="flex-column pill-tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Home</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Onboarding Guide</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Your Deliveries</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Your Restaurants</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={10} className="m-height">
                <Tab.Content className="m-height">
                  <Tab.Pane eventKey="first" className="m-height">
                    <WelcomeMessage />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth" className="m-height">
                    <ProgramTraining />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second" className="m-height">
                    <div className="order-div">
                      <Deliveries />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third" className="m-height">
                    <RestaurantsPartners />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </>
    );
  }
}

export default ProgramUserPage;
