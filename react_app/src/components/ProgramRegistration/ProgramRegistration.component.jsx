import React from "react";
import Button from "react-bootstrap/Button";
import { Form, Col, Container } from "react-bootstrap";

const ProgramRegistration = () => (
  <Container>
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridApplicantEmail">
          <Form.Label>Your email</Form.Label>
          <Form.Control type="email" placeholder="A valid email address" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Your password</Form.Label>
          <Form.Control type="password" placeholder="new password" />
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridApplicantName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control placeholder="Your Name" />
      </Form.Group>

      <Form.Group controlId="formGridApplicantPhoneNumber">
        <Form.Label>Your Phone Number</Form.Label>
        <Form.Control placeholder="Phone number" />
      </Form.Group>

      <Form.Group controlId="formGridProgramName">
        <Form.Label>Program Name</Form.Label>
        <Form.Control placeholder="Program Name" />
      </Form.Group>

      <Form.Group controlId="formGridProgramPhoneNumber">
        <Form.Label>Program Phone Number</Form.Label>
        <Form.Control placeholder="Phone number" />
      </Form.Group>

      <Form.Group controlId="formGridProgramEmail">
        <Form.Label>Program Email</Form.Label>
        <Form.Control type="email" placeholder="A valid email address" />
      </Form.Group>

      <Form.Group controlId="formGridAddress">
        <Form.Label>Address of program</Form.Label>
        <Form.Control placeholder="Address" />
      </Form.Group>

      <Form.Group controlId="formGridArea">
        <Form.Label>Toronto Neighbourhood area of program</Form.Label>
        <Form.Control placeholder="Area" />
      </Form.Group>


      <Form.Group controlId="DeliveryInstruction">
        <Form.Label>Instructions for delivery(how to deliver to your program)</Form.Label>
        <Form.Control as="textarea" rows="4" />
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
        <Form.Label>Tell us about the need for dinners at your program</Form.Label>
        <Form.Control as="textarea" rows="4" />
      </Form.Group>

      <Form.Group controlId="formGridAgeRange">
        <Form.Label>What is the age range of the kids in your program? (i.e. ages 6-12)</Form.Label>
        <Form.Control placeholder="Age range" />
      </Form.Group>

      <Form.Group controlId="formGridKidNumber">
        <Form.Label>How many children in your after-school program need meals? </Form.Label>
        <Form.Control placeholder="Number" />
      </Form.Group>

      <Form.Group controlId="inKindSupport">
        <Form.Label>Do you currently receive in-kind support for your meal and/or snack program?</Form.Label>
        <Form.Control as="textarea" rows="4" />
      </Form.Group>

      <Form.Group controlId="mealDays">
        <Form.Label>Which days of the week do you need dinner deliveries?</Form.Label>
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

      <Form.Group controlId="formGridTime">
        <Form.Label>Around what time would you like dinners to be delivered to your program? </Form.Label>
        <Form.Control placeholder="Time" />
      </Form.Group>

      <Form.Group controlId="DietaryRestrictions">
        <Form.Label>Please inform us of any specific dietary restrictions and/or allergies we should be aware of.</Form.Label>
        <Form.Control as="textarea" rows="4" />
      </Form.Group>

      <Form.Group controlId="FCK">
        <Form.Label>How did you learn about Feeding Canadian Kids?</Form.Label>
        <Form.Control as="textarea" rows="4" />
      </Form.Group>

      <Form.Group controlId="else">
        <Form.Label>Anything else we should know at the moment?</Form.Label>
        <Form.Control as="textarea" rows="4" />
      </Form.Group>

      <div style={{ marginBottom: "20px" }}>
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

export default ProgramRegistration;
