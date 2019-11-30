import React from "react";
import { Table } from "react-bootstrap";
import "./ProgramPartners.css";

class ProgramsPartners extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      partners: []
    }
  }

  render() {
    return (
      <div>
        <h1> Your Program Partners Information</h1>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Program Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Active Service</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id = "programTableCell">Kerr St. Mission</td>
              <td id = "programTableCell">Oakville</td>
              <td id = "programTableCell">Wednesday</td>
              <td id = "programTableCell">Yes</td>
            </tr>
            <tr>
              <td id = "programTableCell"> 
                What's
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
export default ProgramsPartners;
