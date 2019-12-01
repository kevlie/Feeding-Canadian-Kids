import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./ProgramUserPage.css";

class DeliverySlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  render() {
    const timeString12hr = timeString => {
      return new Date("1970-01-01T" + timeString + "Z").toLocaleTimeString(
        {},
        { timeZone: "UTC", hour12: true, hour: "numeric", minute: "numeric" }
      );
    };
    return (
      <>
        <Button
          onClick={() => this.setState({ show: true })}
          size="lg"
          id="slot"
          variant="outline-success"
        >
          {timeString12hr(this.props.time)}
        </Button>

        <Modal
          size="lg"
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Restaurant Details:
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>
              {"Name: "}
              {this.props.name}
            </h3>
            <h3>
              {"Meals: "} {this.props.meals}
            </h3>
            <h3>
              {"Address: "} {this.props.address}
            </h3>
          </Modal.Body>
          <Modal.Footer>
            <Button 
              className="confirmdeliveryButton"
              variant="primary">Confirm Delivery</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default DeliverySlot;
