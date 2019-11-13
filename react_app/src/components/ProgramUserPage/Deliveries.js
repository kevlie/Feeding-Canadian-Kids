import React from "react";
import { Table } from "react-bootstrap";
import "./Deliveries.css";
import DeliverySlot from "./DeliverySlot.js";

class Deliveries extends React.Component {
  render() {
    return (
      <>
        <h1> Your Deliveries for the Week</h1>
        <h2> Click on a scheduled delivery below to see further information</h2>
        <Table striped bordered size="sm">
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <DeliverySlot time="5:30" which="0" />
                <DeliverySlot time="6:00" which="1" />
              </td>
              <td></td>
              <td>
                <DeliverySlot time="5:00" which="2" />
              </td>
              <td></td>
              <td>
                <DeliverySlot time="7:00" which="3" />
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
export default Deliveries;
