import React from "react";
import { Row, Col, Nav, Tab, Tabs } from "react-bootstrap";

import Deliveries from "./Deliveries";
import WelcomeMessage from "./WelcomeMessage.js";
import RestaurantsPartners from "./RestaurantsPartners.js";
import ProgramTraining from "./ProgramTraining.js";
import "./ProgramUserPage.css";

class ProgramUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sample name"
    };
  }

  componentDidMount() {
    document.body.classList.add("hunnid");
    document.documentElement.classList.add("hunnid");
    fetch("http://localhost:9000/api/programuserpage/name", {
      method: "get",
      credentials: "include"
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          name: json[0].name
        });
      });
  }

  componentWillUnmount() {
    document.body.classList.remove("hunnid");
    document.documentElement.classList.remove("hunnid");
  }

  render() {
    return (
      <>
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
      </>
    );
  }

  // render() {
  //   return (
  //     <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  //       <Tab eventKey="home" title="Home">
  //         <WelcomeMessage />
  //       </Tab>
  //       <Tab eventKey="onboarding" title="Onboarding Guide">
  //         <ProgramTraining />
  //       </Tab>
  //       <Tab eventKey="deliveries" title="Your Deliveries">
  //         <div className="order-div">
  //           <Deliveries />
  //         </div>
  //       </Tab>
  //       <Tab eventKey="restaurants" title="Your Restaurants">
  //           <RestaurantsPartners/>
  //       </Tab>
  //     </Tabs>
  //   );
  // }
}

export default ProgramUserPage;
