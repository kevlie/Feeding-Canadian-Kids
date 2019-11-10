import React from "react";
import { Table } from "react-bootstrap";
import "./Orders.css";
import OrderSlot from "./OrderSlot.js";

class Orders extends React.Component {
  render() {
    return (
      <>
        <h1> Your Orders for the Week</h1>
        <h2> Click on an order below to see further information</h2>
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
                <OrderSlot time="5:30" which="0" />
                <OrderSlot time="6:00" which="1" />
              </td>
              <td></td>
              <td>
                <OrderSlot time="5:00" which="2" />
              </td>
              <td></td>
              <td>
                <OrderSlot time="7:00" which="3" />
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
export default Orders;
