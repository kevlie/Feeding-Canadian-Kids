import React from "react";
/* import Button from "react-bootstrap/Button"; */
import Button from "@material-ui/core/Button";
import { Form, Col, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import './CourierRegistration.css';
import FeedingCKkids from "../../img/FeedingCK-kids.png";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

const registerCourier = data => {
  fetch(express_server + "/api/courierApplication", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

const hash = require("object-hash");

class CourierRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passwordHash: "",
      applicantName: "",
      area: "",
      driverInformation: "",
      vehicleDescription: "",
      daysAvailable: {
        monday: "0",
        tuesday: "0",
        wednesday: "0",
        thursday: "0",
        friday: "0"
      },
      discoveryInfo: "",
      extraInfo: ""
    };
  }

  render() {
    return (
      <Container>
        <div className="courierForm">
          <div className="title">
            <h4>
              Courier Registration
            </h4>
          </div>
          <div
            className="courierInstruction"
            style={{ marginBottom: "20px" }}
          >
            <em>
              Please fill out this registration form with as much detail as
              possible and we will work to get back to you within 48 business
              hours.
            </em>
          </div>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="A valid email address"
                  onChange={e => {
                    this.setState({
                      email: e.target.value.toString()
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  onChange={e => {
                    this.setState({
                      passwordHash: hash(e.target.value.toString())
                    });
                  }}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                placeholder="Short-answer text"
                onChange={e => {
                  this.setState({
                    applicantName: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridAreaOfService">
              <Form.Label>
                Area of service (i.e. village, town, city, etc.)
              </Form.Label>
              <Form.Control
                placeholder="Short-answer text"
                onChange={e => {
                  this.setState({
                    area: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridDriverInformation">
              <Form.Label>
                Driver information: license number, class and expiration
              </Form.Label>
              <Form.Control
                placeholder="Short-answer text"
                onChange={e => {
                  this.setState({
                    driverInformation: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridDescriptionVehicle">
              <Form.Label>
                Description of vehicle: license plate and make
              </Form.Label>
              <Form.Control
                placeholder="Long-answer text"
                onChange={e => {
                  this.setState({
                    vehicleDescription: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="availableDays">
              <Form.Label>
                Delivery preferences: please detail which days of week(afternoons)
                you would be available to make Feeding Canadian Kids deliveries
              </Form.Label>
              <Form.Check
                custom
                type="checkbox"
                id="monday"
                label="Monday"
                onChange={e => {
                  this.setState({
                    daysAvailable: {
                      monday: this.state.daysAvailable.monday === "0" ? "1" : "0",
                      tuesday: this.state.daysAvailable.tuesday,
                      wednesday: this.state.daysAvailable.wednesday,
                      thursday: this.state.daysAvailable.thursday,
                      friday: this.state.daysAvailable.friday
                    }
                  });
                }}
              />
              <Form.Check
                custom
                type="checkbox"
                id="tuesday"
                label="Tuesday"
                onChange={e => {
                  this.setState({
                    daysAvailable: {
                      monday: this.state.daysAvailable.monday,
                      tuesday:
                        this.state.daysAvailable.tuesday === "0" ? "1" : "0",
                      wednesday: this.state.daysAvailable.wednesday,
                      thursday: this.state.daysAvailable.thursday,
                      friday: this.state.daysAvailable.friday
                    }
                  });
                }}
              />
              <Form.Check
                custom
                type="checkbox"
                id="wednesday"
                label="Wednesday"
                onChange={e => {
                  this.setState({
                    daysAvailable: {
                      monday: this.state.daysAvailable.monday,
                      tuesday: this.state.daysAvailable.tuesday,
                      wednesday:
                        this.state.daysAvailable.wednesday === "0" ? "1" : "0",
                      thursday: this.state.daysAvailable.thursday,
                      friday: this.state.daysAvailable.friday
                    }
                  });
                }}
              />
              <Form.Check
                custom
                type="checkbox"
                id="thursday"
                label="Thursday"
                onChange={e => {
                  this.setState({
                    daysAvailable: {
                      monday: this.state.daysAvailable.monday,
                      tuesday: this.state.daysAvailable.tuesday,
                      wednesday: this.state.daysAvailable.wednesday,
                      thursday:
                        this.state.daysAvailable.thursday === "0" ? "1" : "0",
                      friday: this.state.daysAvailable.friday
                    }
                  });
                }}
              />
              <Form.Check
                custom
                type="checkbox"
                id="friday"
                label="Friday"
                onChange={e => {
                  this.setState({
                    daysAvailable: {
                      monday: this.state.daysAvailable.monday,
                      tuesday: this.state.daysAvailable.tuesday,
                      wednesday: this.state.daysAvailable.wednesday,
                      thursday: this.state.daysAvailable.thursday,
                      friday: this.state.daysAvailable.friday === "0" ? "1" : "0"
                    }
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="FCK">
              <Form.Label>
                How did you learn about Feeding Canadian Kids?
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                onChange={e => {
                  this.setState({
                    discoveryInfo: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="else">
              <Form.Label>Anything else we should know at the moment?</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                onChange={e => {
                  this.setState({
                    extraInfo: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Button
              variant="contained"
              className="submitBut"
              type="submit"
              onClick={e => {
                registerCourier(this.state);
                this.props.history.push("/RegistrationComplete"); // TODO only redirect if success
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
        <div>
          <img src={FeedingCKkids}/>
        </div>
      </Container>
    );
  }
}

export default withRouter(CourierRegistration);
