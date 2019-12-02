import React from "react";
import Button from "@material-ui/core/Button";
// import Button from "react-bootstrap/Button";
import { Form, Col, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./RestaurantRegistration.css";
import FeedingCKkids from "../../img/FeedingCK-kids.png";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

const registerRestaurant = data => {
  fetch(express_server + "/api/restaurantApplication", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
};

const hash = require("object-hash");

class RestaurantRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passwordHash: "",
      applicantName: "",
      phone: "",
      restaurantName: "",
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
      uberEatsStatus: "1",
      deliveryCapability: "1",
      numMeals: "0",
      packaging: "",
      timing: "1",
      discoveryInfo: "",
      extraInfo: ""
    };
  }

  render() {
    return (
      <Container>
        <div className="restForm">
          <div className="title">
              <h4>
                Restaurant Registration
              </h4>
          </div>
          <div
            className="restInstruction"
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
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Name"
                onChange={e => {
                  this.setState({
                    applicantName: e.target.value.toString()
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
                    phone: e.target.value.toString()
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
                    contactPerson: e.target.value.toString()
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
                    contactPhone: e.target.value.toString()
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

            <Form.Group controlId="UberEat">
              <Form.Label>
                Does your restaurant currently use UberEats for meal delivery?
              </Form.Label>
              <Form.Control
                as="select"
                onChange={e => {
                  this.setState({
                    uberEatsStatus: this.state.uberEatsStatus === 1 ? 0 : 1
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
                    deliveryCapability:
                      this.state.deliveryCapability === 1 ? 0 : 1
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
                    numMeals: e.target.value.toString()
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
                    packaging: e.target.value.toString()
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
                registerRestaurant(this.state);
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

export default withRouter(RestaurantRegistration);
