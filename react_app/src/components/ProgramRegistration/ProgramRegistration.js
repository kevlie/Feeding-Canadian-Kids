import React from "react";
// import Button from "react-bootstrap/Button";
import Button from "@material-ui/core/Button";
import { Form, Col, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import './ProgramRegistration.css';
import FeedingCKkids from "../../img/FeedingCK-kids.png";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

const registerProgram = data => {

  fetch(express_server + "/api/programApplication", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => {
    if (res.status === 200) {
      return true
    } else {
      return false
    }
  });
};

const hash = require("object-hash");

class ProgramRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicantEmail: "",
      passwordHash: "",
      applicantName: "",
      applicantPhone: "",
      programName: "",
      phone: "",
      email: "",
      address: "",
      area: "",
      deliveryInstructions: "",
      dinnerNeeds: "",
      ageRange: "",
      numKids: "",
      inKindSupport: "0",
      daysRequired: {
        monday: "0",
        tuesday: "0",
        wednesday: "0",
        thursday: "0",
        friday: "0"
      },
      preferredTime: "",
      dietaryRestrictions: "",
      discoveryInfo: "",
      extraInfo: ""
    };
  }

  render() {
    return (
      <Container>
        <div className="programForm">
          <div className="title">
            <h4>
              After School Program Registration
            </h4>
          </div>
          <div
            className="programInstruction"
            style={{ marginBottom: "20px" }}
          >
            <em>
              Please fill out this registration form with as much detail as
              possible and we will work to get back to you within 48 business
              hours.
            </em>
          </div >
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridApplicantEmail">
                <Form.Label>Your email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="A valid email address"
                  onChange={e => {
                    this.setState({
                      applicantEmail: e.target.value.toString()
                    });
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="new password"
                  onChange={e => {
                    this.setState({
                      passwordHash: hash(e.target.value.toString())
                    });
                  }}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridApplicantName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                placeholder="Your Name"
                onChange={e => {
                  this.setState({
                    applicantName: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridApplicantPhoneNumber">
              <Form.Label>Your Phone Number</Form.Label>
              <Form.Control
                placeholder="Phone number"
                onChange={e => {
                  this.setState({
                    applicantPhone: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridProgramName">
              <Form.Label>Program Name</Form.Label>
              <Form.Control
                placeholder="Program Name"
                onChange={e => {
                  this.setState({
                    programName: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridProgramPhoneNumber">
              <Form.Label>Program Phone Number</Form.Label>
              <Form.Control
                placeholder="Phone number"
                onChange={e => {
                  this.setState({
                    phone: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridProgramEmail">
              <Form.Label>Program Email</Form.Label>
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

            <Form.Group controlId="formGridAddress">
              <Form.Label>Address of program</Form.Label>
              <Form.Control
                placeholder="Address"
                onChange={e => {
                  this.setState({
                    address: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridArea">
              <Form.Label>Toronto Neighbourhood area of program</Form.Label>
              <Form.Control
                placeholder="Area"
                onChange={e => {
                  this.setState({
                    area: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="DeliveryInstructions">
              <Form.Label>
                Instructions for delivery(how to deliver to your program)
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                onChange={e => {
                  this.setState({
                    deliveryInstructions: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            {/* <Form.Group controlId="formGridZipCode">
          <Form.Label>Zip/Postal Code</Form.Label>
          <Form.Control placeholder="Zip/Postal Code" />
        </Form.Group>
        <Form.Group controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="email" placeholder="City" />
        </Form.Group> */}
            <Form.Group controlId="needForDinners">
              <Form.Label>
                Tell us about the need for dinners at your program
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                onChange={e => {
                  this.setState({
                    needForDinners: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridAgeRange">
              <Form.Label>
                What is the age range of the kids in your program? (i.e. ages
                6-12)
              </Form.Label>
              <Form.Control
                placeholder="Age range"
                onChange={e => {
                  this.setState({
                    ageRange: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridKidNumber">
              <Form.Label>
                How many children in your after-school program need meals?{" "}
              </Form.Label>
              <Form.Control
                placeholder="Number"
                onChange={e => {
                  this.setState({
                    numKids: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="inKindSupport">
              <Form.Label>
                Do you currently receive in-kind support for your meal and/or
                snack program? Leave unchecked if no.
              </Form.Label>
              <Form.Check
                custom
                type="checkbox"
                id="inKindsupport"
                label="Yes"
                onChange={e => {
                  this.setState({
                    inKindSupport: this.state.inKindSupport === "0" ? "1" : "0",
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="mealDays">
              <Form.Label>
                Which days of the week do you need dinner deliveries?
              </Form.Label>
              <Form.Check
                custom
                type="checkbox"
                id="monday"
                label="Monday"
                onChange={e => {
                  this.setState({
                    daysRequired: {
                      monday: this.state.daysRequired.monday === "0" ? "1" : "0",
                      tuesday: this.state.daysRequired.tuesday,
                      wednesday: this.state.daysRequired.wednesday,
                      thursday: this.state.daysRequired.thursday,
                      friday: this.state.daysRequired.friday
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
                    daysRequired: {
                      monday: this.state.daysRequired.monday,
                      tuesday: this.state.daysRequired.tuesday === "0" ? "1" : "0",
                      wednesday: this.state.daysRequired.wednesday,
                      thursday: this.state.daysRequired.thursday,
                      friday: this.state.daysRequired.friday
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
                    daysRequired: {
                      monday: this.state.daysRequired.monday,
                      tuesday: this.state.daysRequired.tuesday,
                      wednesday: this.state.daysRequired.wednesday === "0" ? "1" : "0",
                      thursday: this.state.daysRequired.thursday,
                      friday: this.state.daysRequired.friday
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
                    daysRequired: {
                      monday: this.state.daysRequired.monday,
                      tuesday: this.state.daysRequired.tuesday,
                      wednesday: this.state.daysRequired.wednesday,
                      thursday: this.state.daysRequired.thursday === "0" ? "1" : "0",
                      friday: this.state.daysRequired.friday
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
                    daysRequired: {
                      monday: this.state.daysRequired.monday,
                      tuesday: this.state.daysRequired.tuesday,
                      wednesday: this.state.daysRequired.wednesday,
                      thursday: this.state.daysRequired.thursday,
                      friday: this.state.daysRequired.friday === "0" ? "1" : "0"
                    }
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="formGridTime">
              <Form.Label>
                Around what time would you like dinners to be delivered to your
                program?{" "}
              </Form.Label>
              <Form.Control
                placeholder="Time"
                onChange={e => {
                  this.setState({
                    preferredTime: e.target.value.toString()
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId="DietaryRestrictions">
              <Form.Label>
                Please inform us of any specific dietary restrictions and/or
                allergies we should be aware of.
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                onChange={e => {
                  this.setState({
                    dietaryRestrictions: e.target.value.toString()
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
              type="submit"
              className="submitBut"
              onClick={e => {
                registerProgram(this.state);
                this.props.history.push("/registrationcomplete"); // TODO only redirect if success
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

export default withRouter(ProgramRegistration);
