import React from "react";
import { Table } from "react-bootstrap";

class RestaurantsPartners extends React.Component {
  render() {
    return (
      <div>
        <h1> Your Restaurant Partners Information</h1>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Restaurant Name</th>
              <th>Status</th>
              <th>PA Days</th>
              <th>Last Day of Programming</th>
              <th>Restaurant Address</th>
              <th>Radius</th>
              <th>Delivery Time</th>
              <th>Contact e-mail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Taylor's Landing</td>
              <td>Active (Feb 8th)</td>
              <td>Feb 15th, June 7th, June 28th</td>
              <td></td>
              <td>150 Grenoble Dr, North York, ON M3C 0H1</td>
              <td>3.6 Km</td>
              <td>3:30:00 PM (11:30 on PA Days)</td>
              <td>winston@thelandinggroup.ca</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default RestaurantsPartners;
