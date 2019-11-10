import React from "react";
import Button from "react-bootstrap/Button";
import { Form, Col, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

//wait for api to complete to uncomment

// const registerProgram = data => {
//   fetch("http://localhost:9000/api/programApplication", {
//     method: "post",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
//   });
// };

const hash = require("object-hash");

class ProgramRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passwordHash: "",
      applicantName: "",
      applicantPhone: "",
      programName: "",
      programPhone: "",
      programEmail: "",
      programAddress: "",
      programArea: "",
      deliveryInstruction: "",
      needForDinners: "",
      ageRange: "",
      numKids: "",
      inkindSupport: "",
      daysNeedMeals: {
        monday: "0",
        tuesday: "0",
        wednesday: "0",
        thursday: "0",
        friday: "0"
      },
      deliveryTime: "",
      dietaryRestrictions: "",
      discoveryInfo: "",
      extraInfo: ""
    };
  }

  render() {
    return (
      <Container>
        <div style={{ marginBottom: "20px" }}>
          <em>
            Please fill out this registration form with as much detail as
            possible and we will work to get back to you within 48 business
            hours.
          </em>
        </div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridApplicantEmail">
              <Form.Label>Your email</Form.Label>
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
                  programPhone: e.target.value.toString()
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
                  programEmail: e.target.value.toString()
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
                  programAddress: e.target.value.toString()
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
                  programArea: e.target.value.toString()
                });
              }}
            />
          </Form.Group>

          <Form.Group controlId="DeliveryInstruction">
            <Form.Label>
              Instructions for delivery(how to deliver to your program)
            </Form.Label>
            <Form.Control 
              as="textarea" 
              rows="4" 
              onChange={e => {
                this.setState({
                  deliveryInstruction: e.target.value.toString()
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
              snack program?
            </Form.Label>
            <Form.Control 
              as="textarea" 
              rows="4" 
              onChange={e => {
                this.setState({
                  inkindSupport: e.target.value.toString()
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
                  daysNeedMeals: {
                    monday: this.state.daysNeedMeals.monday === "0" ? "1" : "0",
                    tuesday: this.state.daysNeedMeals.tuesday,
                    wednesday: this.state.daysNeedMeals.wednesday,
                    thursday: this.state.daysNeedMeals.thursday,
                    friday: this.state.daysNeedMeals.friday
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
                  daysNeedMeals: {
                    monday: this.state.daysNeedMeals.monday,
                    tuesday: this.state.daysNeedMeals.tuesday === "0" ? "1" : "0",
                    wednesday: this.state.daysNeedMeals.wednesday,
                    thursday: this.state.daysNeedMeals.thursday,
                    friday: this.state.daysNeedMeals.friday
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
                  daysNeedMeals: {
                    monday: this.state.daysNeedMeals.monday,
                    tuesday: this.state.daysNeedMeals.tuesday,
                    wednesday: this.state.daysNeedMeals.wednesday=== "0" ? "1" : "0",
                    thursday: this.state.daysNeedMeals.thursday,
                    friday: this.state.daysNeedMeals.friday
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
                  daysNeedMeals: {
                    monday: this.state.daysNeedMeals.monday,
                    tuesday: this.state.daysNeedMeals.tuesday,
                    wednesday: this.state.daysNeedMeals.wednesday,
                    thursday: this.state.daysNeedMeals.thursday=== "0" ? "1" : "0",
                    friday: this.state.daysNeedMeals.friday
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
                  daysNeedMeals: {
                    monday: this.state.daysNeedMeals.monday,
                    tuesday: this.state.daysNeedMeals.tuesday,
                    wednesday: this.state.daysNeedMeals.wednesday,
                    thursday: this.state.daysNeedMeals.thursday,
                    friday: this.state.daysNeedMeals.friday=== "0" ? "1" : "0"
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
                  deliveryTime: e.target.value.toString()
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

          <div style={{ marginBottom: "20px" }}>
            <em>
              Thank-you very much for registering with Feeding Canadian Kids!
              Our team will review your information and get back to you within
              48 hours (Monday-Friday).
            </em>
          </div>

          <Button
            variant="primary"
            type="submit"
            onClick={e => {
              this.props.history.push("/RegistrationComplete");
            }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(ProgramRegistration);
