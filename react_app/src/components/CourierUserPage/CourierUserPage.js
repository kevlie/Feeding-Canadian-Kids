import React from "react";
import { Row, Col, Nav, Tab } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import WelcomeMessage from "./WelcomeMessage.js";
// import ProgramsPartners from "./ProgramsPartners.js";
import "./CourierUserPage.css";

class RestaurantUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.history.location.state.email
    };
  }
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
                    <Nav.Link eventKey="first">{this.state.email}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Your Deliveries</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Your Partners</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={10} className="m-height">
                <Tab.Content className="m-height">
                  <Tab.Pane eventKey="first" className="m-height">
                    <WelcomeMessage email={this.state.email} />
                  </Tab.Pane>

                  <Tab.Pane eventKey="second" className="m-height">
                    <div className="order-div">
                      {/* <Orders email={this.state.email} /> */}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third" className="m-height">
                    {/* <ProgramsPartners /> */}
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

export default withRouter(RestaurantUserPage);
