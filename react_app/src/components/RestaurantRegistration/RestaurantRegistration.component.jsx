import React from "react";
import Button from "react-bootstrap/Button";
import { Form, Col, Container } from "react-bootstrap";

const RestaurantRegistration = () => (
  <Container>
    <Form>
    <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Your email</Form.Label>
          <Form.Control type="email" placeholder="A valid email address" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Your password</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridName">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Name" />
      </Form.Group>

      <Form.Group controlId="formGridPhoneNumber">
        <Form.Label>Phone number</Form.Label>
        <Form.Control placeholder="Phone number" />
      </Form.Group>

      <Form.Group controlId="formGridPosition">
        <Form.Label>Position</Form.Label>
        <Form.Control placeholder="Position" />
      </Form.Group>

      <Form.Group controlId="formGridRestaurantName">
        <Form.Label>Name of restaurant</Form.Label>
        <Form.Control placeholder="Restaurant Name" />
      </Form.Group>

      <Form.Group controlId="formGridAddress">
        <Form.Label>Address of restaurant</Form.Label>
        <Form.Control placeholder="Address" />
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
        <Form.Control placeholder="Name" />
      </Form.Group>

      <Form.Group controlId="formGridContactEmail">
        <Form.Label>Contact email for future programs partners</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group controlId="formGridContactPerson">
        <Form.Label>Contact phone number for future programs partners</Form.Label>
        <Form.Control placeholder="Phone number" />
      </Form.Group>

      <Form.Group controlId="availableDays">
        <Form.Label>Which day(s) of the week would you like to offer dinners for?</Form.Label>
        <Form.Check 
        custom
        type='checkbox'
        id="monday"
        label="Monday"
        />
        <Form.Check 
        custom
        type='checkbox'
        id="tuesday"
        label="Tuesday"
        />
        <Form.Check 
        custom
        type='checkbox'
        id="wednesday"
        label="Wednesday"
        />
        <Form.Check 
        custom
        type='checkbox'
        id="thursday"
        label="Thursday"
        />
        <Form.Check 
        custom
        type='checkbox'
        id="friday"
        label="Friday"
        />
      </Form.Group>
      
      <Form.Group controlId="UberEat">
        <Form.Label>Does your restaurant currently use UberEats for meal delivery?</Form.Label>
        <Form.Control as="select">
          <option>Yes</option>
          <option>No</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="inHouseCapacity">
        <Form.Label>If you answered no, do you have the capacity in-house to make the weekly delivery?</Form.Label>
        <Form.Control as="select">
          <option>Yes</option>
          <option>No</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formGridMealNum">
        <Form.Label>Number of Meals: Currently, our average program size is 36 kids. 
          How many meals (max) are you able to prepare weekly?</Form.Label>
        <Form.Control placeholder="Number" />
      </Form.Group>

      <Form.Group controlId="formGridPackaging">
        <Form.Label>Packaging: Some programs prefer to have food in shareable platter trays to be eaten at the program, 
          while other programs prefer to have individually packaged meals for kids to take home. 
          Are you able to package in trays, individual packages or both?</Form.Label>
        <Form.Control placeholder="Packaging methods" />
      </Form.Group>

      <Form.Group controlId="timing">
        <Form.Label>Timing: Our deliveries mostly occur between the hours of 3pm-5pm. 
          Are you able to have meals prepared in this time frame?</Form.Label>
        <Form.Control as="select">
          <option>Yes</option>
          <option>No</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="FCK">
        <Form.Label>How did you learn about Feeding Canadian Kids?</Form.Label>
        <Form.Control as="textarea" rows="4" />
      </Form.Group>

      <Form.Group controlId="else">
        <Form.Label>Anything else we should know at the moment?</Form.Label>
        <Form.Control as="textarea" rows="4" />
      </Form.Group>

      <div style={{marginBottom:"20px"}}>
        <em>Thank-you very much for registering with Feeding Canadian Kids! 
          Our team will review your information and get back to you within 48 hours (Monday-Friday).
        </em>
      </div> 

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
);

export default RestaurantRegistration;
