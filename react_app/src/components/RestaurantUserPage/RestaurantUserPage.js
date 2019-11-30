import React from "react";
import { Row, Col, Nav, Tab } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Orders from "./Orders.js";
import WelcomeMessage from "./WelcomeMessage.js";
import ProgramsPartners from "./ProgramsPartners.js";
import RestaurantTraining from "./RestaurantTraining.js";
import "./RestaurantUserPage.css";

class RestaurantUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.history.location.state.email,
      name: ""
    };
  }

  getRestaurantName = () => {
    return new Promise(function(resolve, reject) {
      fetch("http://localhost:9000/api/restaurantuserpage/name", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
        //body: JSON.stringify(data)
      }).then(res => {
        resolve(res.json());
      });
    });
  };

  componentDidMount() {
    document.body.classList.add("hunnid");
    document.documentElement.classList.add("hunnid");

    this.getRestaurantName()
      .then(value => {
        console.log(value)
        let state = {
          email: this.state.email,
          name: value[0].name
        };
        this.setState(state);
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
      </>
    );
  }
}

export default withRouter(RestaurantUserPage);
