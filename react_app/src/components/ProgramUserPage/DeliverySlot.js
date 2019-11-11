import React from "react";
import { Button, Modal } from "react-bootstrap";

class DeliverySlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      sampleInfo: [
        {
          Restaurant: "Taylor's Landing",
          Meals: "34",
          Address: "150 Grenoble Drive, North York, ON M3C 1E3"
        },
        {
          Restaurant: "Harper's Landing",
          Meals: "30",
          Address: "485 Kerr St, Oakville, ON L6K 3C5"
        },
        {
          Restaurant: "Jackson's Landing",
          Meals: "50",
          Address: "4228 New St, Burlington, ON L7L 1T3"
        },
        {
          Restaurant: "Hunter's Landing",
          Meals: "18",
          Address: "20 Portugal Square M6J 3P2"
        }
      ]
    };
  }
  render() {
    const index = this.props.which;
    const info = this.state.sampleInfo[index];
    return (
      <>
        <Button
          onClick={() => this.setState({ show: true })}
          size="lg"
          id="slot"
          variant="outline-success"
        >
          {this.props.time}
        </Button>

        <Modal
          size="lg"
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>
              {"Restaurant: "}
              {info.Restaurant}
            </h3>
            <h3>
              {"Meals: "} {info.Meals}
            </h3>
            <h3>
              {"Address: "} {info.Address}
            </h3>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default DeliverySlot;
