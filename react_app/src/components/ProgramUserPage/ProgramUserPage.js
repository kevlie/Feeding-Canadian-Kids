import React from "react";
import { Row, Col, Nav, Tab, Tabs } from "react-bootstrap";

import Deliveries from "./Deliveries";
import WelcomeMessage from "./WelcomeMessage.js";
import RestaurantsPartners from "./RestaurantsPartners.js";
import ProgramTraining from "./ProgramTraining.js";
import "./ProgramUserPage.css";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;


class ProgramUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sample name",
      isLoggedIn: false,
      loaded: null,
    };
  }

  componentDidMount() {
    document.body.classList.add("hunnid");
    document.documentElement.classList.add("hunnid");
    fetch(express_server + "/api/programuserpage/name", {
      method: "get",
      credentials: "include"
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          name: json[0].name
        });
      });

    fetch(express_server + "/api/auth/validate-login", {
      method: "get",
      credentials: "include"
    }).then(res => res.json())
      .then(json => {
        if (json.partnerType === "program") {
          this.setState({ isLoggedIn: true, loaded: true });
        } else {
          this.setState({ isLoggedIn: false, loaded: true });
        }
      });
  }

  componentWillUnmount() {
    document.body.classList.remove("hunnid");
    document.documentElement.classList.remove("hunnid");
  }

  render() {
    if (!this.state.loaded) {
      return <div>Loading.. please wait!</div>
    }
    return (
      <>{!this.state.isLoggedIn ? (
        <h4> You do not have the permissions to access this page.</h4>
      ) : (
          <div>
            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey="first"
              className="no-scroll m-height"
            >
              <Row className="no-scroll m-height">
                <Col sm={2} className="pill-tabs-color trial">
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
                <Col sm={10}>
                  <Tab.Content className="m-height">
                    <Tab.Pane eventKey="first" className="m-height">
                      <WelcomeMessage name={this.state.name} />
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
        )}</>
    );
  }
}

export default ProgramUserPage;
