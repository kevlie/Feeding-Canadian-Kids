import React from "react";
import Button from "react-bootstrap/Button";
import { Form, Col, Container } from "react-bootstrap";

const ProgramRegistration = () => (
  <Container>
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="email" placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="password" placeholder="Last Name" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="Email" />
      </Form.Group>

      <Form.Group controlId="formGridProgramName">
        <Form.Label>Program Name</Form.Label>
        <Form.Control placeholder="Restaurant Name" />
      </Form.Group>

      <Form.Group controlId="formGridAddress">
        <Form.Label>Street Address</Form.Label>
        <Form.Control placeholder="Address" />
      </Form.Group>
      <Form.Group controlId="formGridZipCode">
        <Form.Label>Zip/Postal Code</Form.Label>
        <Form.Control placeholder="Zip/Postal Code" />
      </Form.Group>
      <Form.Group controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="email" placeholder="City" />
      </Form.Group>

      <Form.Group controlId="formGridPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control placeholder="Phone No." />
      </Form.Group>

      <Form.Group controlId="formGridNumberOfMeals">
        <Form.Label>How many meals does your program require?</Form.Label>
        <Form.Control placeholder="Enter amount" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
);

export default ProgramRegistration;
