import React from "react";
import { Row, Col, Nav, Tab, Tabs } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Orders from "./Orders.js";
import WelcomeMessage from "./WelcomeMessage.js";
import ProgramsPartners from "./ProgramsPartners.js";
import RestaurantTraining from "./RestaurantTraining.js";
import "./RestaurantUserPage.css";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

class RestaurantUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      approval_status: 0,
      hasAccess: false
    };
  }

  getRestaurantName = () => {
    return new Promise(function (resolve, reject) {
      fetch(express_server + "/api/restaurantuserpage/name", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
        //body: JSON.stringify(data)
      }).then(res => {
        resolve(res.json());
      });
    });
  };

  componentDidMount() {
    document.body.classList.add("hunnid");
    document.documentElement.classList.add("hunnid");

    fetch(express_server + "/api/restaurantuserpage", {
      method: "get",
      credentials: "include"
      // body: JSON.stringify({ email: this.state.email })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json[0] === undefined) {
          this.setState({ approval_status: null });
        } else {
          this.setState({ approval_status: json[0].approval_status });
        }
      });

    fetch(express_server + "/api/restaurantuserpage/isRestaurant", {
      method: "get",
      credentials: "include"
    }).then(res => {
      if (res.status === 200) {
        this.setState({ hasAccess: true });
      }
    });

    this.getRestaurantName()
      .then(value => {
        console.log(value.length);
        if (value.length > 0) {
          let state = {
            email: this.state.email,
            name: value[0].name
          };
          this.setState(state);
        }
        return this.state.name;
      })
      .then(value => {
        console.log(value);
      });
  }

  componentWillUnmount() {
    document.body.classList.remove("hunnid");
    document.documentElement.classList.remove("hunnid");
  }

  render() {
    return (
      <>
        {!this.state.hasAccess ? (
          <h4> You do not have the permissions to access this page.</h4>
        ) : this.state.approval_status === 0 ? (
          <h4>
            Your application is still currently being processed. Our staff will
            work to get back to you within 48 business hours.
          </h4>
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
                          <Nav.Link eventKey="second">Your Orders</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Your Partners</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={10}>
                      <Tab.Content className="m-height">
                        <Tab.Pane eventKey="first" className="m-height">
                          <WelcomeMessage name={this.state.name} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth" className="m-height">
                          <RestaurantTraining />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second" className="m-height">
                          <div className="order-div">
                            <Orders email={this.state.email} />
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third" className="m-height">
                          <ProgramsPartners />
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            )}

        {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
              <WelcomeMessage name={this.state.name} />
            </Tab>

            <Tab eventKey="onboarding" title="Onboarding Guide">
            <RestaurantTraining />
            </Tab>

            <Tab eventKey="orders" title="Your Orders">
              <Orders email={this.state.email}/>
            </Tab>
            <Tab eventKey="programs" title="Your Programs">
              <ProgramsPartners />
            </Tab>

          </Tabs> */}
      </>
    );
  }
}

export default withRouter(RestaurantUserPage);
