import React, { Component } from "react";
import { Form, Container } from "react-bootstrap";
import "./RegistrationComplete.css";
import FeedingCKkids from "../../img/FeedingCK-kids.png";

class RegistrationComplete extends Component {
  render() {
    return (
      <Container>
        <div className="completepage"> 
            <div className="imgcontainer">
              <img className="img" src={FeedingCKkids} />
            </div>
            <div className="completecard">
              <div className="submittext">
                <h3>
                  Form Submitted
                </h3>
              </div>
              <div className="completetext">
                <h4>
                  Thank you for your interest in joining the Feeding Canadian Kids dinner
                  program! We’re lucky to have you. We will review your registration form
                  and get in touch with next steps within 48 business hours.
                </h4>
              </div>
            </div>
        </div>

        
      </Container>
      
    );
  }
}

export default RegistrationComplete;
