import React from "react";
import { Table } from "react-bootstrap";

class RestaurantsPartners extends React.Component {
  render() {
    return (
      <div>
        <h1> Your Restaurant Partners Information</h1>
        <Table striped bordered size="sm">
          <thead>
            <tr>
              <th>Restaurant Name</th>
              <th>Status</th>
              <th>PA Days</th>
              <th>Last Day of Programming</th>
              <th>Restaurant Address</th>
              <th>Radius</th>
              <th>Details</th>
              <th>Dietary Restrictions</th>
              <th>Delivery Time</th>
              <th>Contact e-mail</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default RestaurantsPartners;
