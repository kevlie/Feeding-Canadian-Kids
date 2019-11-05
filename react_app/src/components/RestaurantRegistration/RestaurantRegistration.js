import React from "react";
import Button from "react-bootstrap/Button";
import { Form, Col, Container } from "react-bootstrap";

const registerRestaurant = data => {
  fetch("http://localhost:9000/testAPI", {
    method: "POST",
    body: JSON.stringify(data)
  });
};
var hash = require("object-hash");

class RestaurantRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passwordHash: "",
      applicantName: "",
      phone: "",
      restarurantName: "",
      restaurantAddress: "",
      contactEmail: "",
      contactPerson: "",
      contactPhone: "",
      daysAvailable: {
        monday: "0",
        tuesday: "0",
        wednesday: "0",
        thursday: "0",
        friday: "0"
      },
      uberEats: "1",
      deliveryCapability: "1",
      numMeals: "0",
      packaging: "",
      timing: "1",
      discoveryInfo: "",
      extraInfo: ""
    };
  }
  // onChange={e => {
  //   let index = -1;
  //   let i = 0;
  //   for (i = 0; i < this.state.availableDays.length; i++) {
  //     if (this.state.availableDays[i] === "Monday") {
  //       index = i;
  //       break;
  //     }
  //   }
  //   if (index == -1) {
  //     this.state.availableDays.push("Monday");
  //   } else {
  //     this.state.availableDays.splice(i, 1);
  //   }
  //   this.setState({
  //     availableDays: this.state.availableDays
  //   });
  //   console.log(this.state.availableDays);
  // }}
  render() {
    return (
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
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
                placeholder="password"
                onChange={e => {
                  this.setState({
                    applicantPassword: hash(e.target.value.toString())
                  });
                }}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="Name"
              onChange={e => {
                this.setState({
                  name: e.target.value.toString()
                });
              }}
            />
          </Form.Group>

          <Form.Group controlId="formGridPhoneNumber">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              placeholder="Phone number"
              onChange={e => {
                this.setState({
                  applicantPhoneNumber: e.target.value.toString()
                });
              }}
            />
          </Form.Group>

          <Form.Group controlId="formGridRestaurantName">
            <Form.Label>Name of restaurant</Form.Label>
            <Form.Control
              placeholder="Restaurant Name"
              onChange={e => {
                this.setState({
                  restaurantName: e.target.value.toString()
                });
              }}
            />
          </Form.Group>

          <Form.Group controlId="formGridAddress">
            <Form.Label>Address of restaurant</Form.Label>
            <Form.Control
              placeholder="Address"
              onChange={e => {
                this.setState({
                  restaurantAddress: e.target.value.toString()
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

          <Form.Group controlId="formGridContactPerson">
            <Form.Label>Contact person for future program partners</Form.Label>
            <Form.Control
              placeholder="Name"
              onChange={e => {
                this.setState({
                  contactName: e.target.value.toString()
                });
              }}
            />
          </Form.Group>

          <Form.Group controlId="formGridContactEmail">
            <Form.Label>Contact email for future programs partners</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={e => {
                this.setState({
                  contactEmail: e.target.value.toString()
                });
              }}
            />
          </Form.Group>

          <Form.Group controlId="formGridContactPerson">
            <Form.Label>
              Contact phone number for future programs partners
            </Form.Label>
            <Form.Control
              placeholder="Phone number"
              onChange={e => {
                this.setState({
                  contactPhoneNumber: e.target.value.toString()
                });
              }}
            />
          </Form.Group>

          <Form.Group controlId="availableDays">
            <Form.Label>
              Which day(s) of the week would you like to offer dinners for?
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
                console.log(this.state.daysAvailable);
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
                    tuesday:
                      this.state.daysAvailable.tuesday === "0" ? "1" : "0",
                    monday: this.state.daysAvailable.monday,
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
                    wednesday:
                      this.state.daysAvailable.wednesday === "0" ? "1" : "0",
                    tuesday: this.state.daysAvailable.tuesday,
                    monday: this.state.daysAvailable.monday,
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
                    thursday:
                      this.state.daysAvailable.thursday === "0" ? "1" : "0",
                    tuesday: this.state.daysAvailable.tuesday,
                    wednesday: this.state.daysAvailable.wednesday,
                    monday: this.state.daysAvailable.monday,
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
                    friday: this.state.daysAvailable.friday === "0" ? "1" : "0",
                    tuesday: this.state.daysAvailable.tuesday,
                    wednesday: this.state.daysAvailable.wednesday,
                    thursday: this.state.daysAvailable.thursday,
                    monday: this.state.daysAvailable.monday
                  }
                });
              }}
            />
          </Form.Group>

          <Form.Group controlId="UberEat">
            <Form.Label>
              Does your restaurant currently use UberEats for meal delivery?
            </Form.Label>
            <Form.Control
              as="select"
              onChange={e => {
                this.setState({
                  uberEats: this.state.uberEats === 1 ? 0 : 1
                });
              }}
            >
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="inHouseCapacity">
            <Form.Label>
              If you answered no, do you have the capacity in-house to make the
              weekly delivery?
            </Form.Label>
            <Form.Control
              as="select"
              onChange={e => {
                this.setState({
                  inHouseCapacity: this.state.deliveryCapability === 1 ? 0 : 1
                });
              }}
            >
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formGridMealNum">
            <Form.Label>
              Number of Meals: Currently, our average program size is 36 kids.
              How many meals (max) are you able to prepare weekly?
            </Form.Label>
            <Form.Control
              placeholder="Number"
              onChange={e => {
                this.setState({
                  numMeals: parseInt(e.target.value)
                });
              }}
            />
          </Form.Group>

          <Form.Group controlId="formGridPackaging">
            <Form.Label>
              Packaging: Some programs prefer to have food in shareable platter
              trays to be eaten at the program, while other programs prefer to
              have individually packaged meals for kids to take home. Are you
              able to package in trays, individual packages or both?
            </Form.Label>
            <Form.Control
              placeholder="Packaging methods"
              onChange={e => {
                this.setState({
                  packagingMethod: e.target.value.toString()
                });
              }}
            />
          </Form.Group>

          <Form.Group controlId="timing">
            <Form.Label>
              Timing: Our deliveries mostly occur between the hours of 3pm-5pm.
              Are you able to have meals prepared in this time frame?
            </Form.Label>
            <Form.Control
              as="select"
              onChange={e => {
                this.setState({
                  timing: this.state.timing === 1 ? 0 : 1
                });
              }}
            >
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
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
                  fck: e.target.value.toString()
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
                  else: e.target.value.toString()
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
              registerRestaurant(this.state);
            }}
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default RestaurantRegistration;
