import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Table } from "react-bootstrap";
import React from "react";
import "./ProgramPartners.css"

var express_server = process.env.REACT_APP_EXPRESS_SERVER;



class ProgramsPartners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  componentDidMount() {
    fetch(express_server + "/api/restaurantuserpage/partneredPrograms", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        let rows = [];
        for (let i = 0; i < data.length; i++) {
          let rowData = [];
          rowData.push(<td> {data[i].name} </td>);
          rowData.push(<td> {data[i].address} </td>);
          rowData.push(<td> {data[i].email} </td>);
          rowData.push(<td> {data[i].phone} </td>);
          rows.push(<tr> {rowData} </tr>);
        }
        this.setState({ rows });
      });
  }

  render() {
    return (
      <div id="programPartners">
        <h1> Your Program Partners Information</h1>
        <Table
          style={{
            width: "97%",
            marginTop: "20px"
          }}
          striped bordered
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>{this.state.rows}</tbody>
        </Table>
      </div>
    );
  }
}

export default ProgramsPartners;
