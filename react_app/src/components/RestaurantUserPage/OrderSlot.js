import React from "react";
import { Button, Modal } from "react-bootstrap";

class OrderSlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      sampleInfo: [
        {
          Program: "AfterSchoolBuddies",
          Meals: "47",
          Address: "123 Mclevin Avenue"
        },
        {
          Program: "York Youth Program",
          Meals: "50",
          Address: "6560 Sewells Road"
        },
        {
          Program: "Toronto Centre for Youth",
          Meals: "30",
          Address: "100 Bay Street"
        },
        {
          Program: "Aboriginal Students Society",
          Meals: "25",
          Address: "16 Keele Street"
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
              {"Program: "}
              {info.Program}
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
export default OrderSlot;
