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
      ],
      time: this.props.time,
      program: this.props.program,
      meals: this.props.meals,
      address: this.props.address,
      dietary_restriction: this.props.dietary_restriction
    };
  }
  render() {
    //const index = this.props.which;
    //const info = this.state.sampleInfo[index];
    const timeString12hr = (timeString) => { return new Date('1970-01-01T' + timeString + 'Z')
      .toLocaleTimeString({},
      {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'});
      }
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
              Order Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>
              {"Program: "}
              {this.state.program}
            </h3>
            <h3>
              {"Meals: "} {this.state.meals}
            </h3>
            <h3>
              {"Address: "} {this.state.address}
            </h3>
            <h3>
              {"Dietary Restrictions: "} {this.state.dietary_restriction ? this.state.dietary_restriction: "None"}
            </h3>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default OrderSlot;
