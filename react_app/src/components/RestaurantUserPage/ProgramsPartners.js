import React from "react";
import { Table } from "react-bootstrap";

class ProgramsPartners extends React.Component {
  render() {
    return (
      <div>
        <h1> Your Program Partners Information</h1>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Program Location</th>
              <th>Toronto Neighbourhood Area</th>
              <th>Weekday</th>
              <th>Active Service</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kerr St. Mission</td>
              <td>Oakville</td>
              <td>Wednesday</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default ProgramsPartners;
