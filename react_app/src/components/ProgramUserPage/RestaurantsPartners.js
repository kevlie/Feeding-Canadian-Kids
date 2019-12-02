import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Table } from "react-bootstrap";
import React from "react";
import "./ProgramUserPage.css";

const columns = [
  {
    dataField: "name",
    text: "Restaurant Name"
  },
  {
    dataField: "address",
    text: "Address"
  },
  {
    dataField: "contact_email",
    text: "Email"
  },
  {
    dataField: "phone",
    text: "Phone Number"
  }
];

class RestaurantsPartners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/api/programRestaurants", {
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
          rowData.push(<td> {data[i].contact_email} </td>);
          rowData.push(<td> {data[i].phone} </td>);
          rows.push(<tr> {rowData} </tr>);
        }
        this.setState({ rows });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="restaurantPartner">
        <h1> Your Restaurant Partners Information</h1>
        <Table
          striped
          bordered
          className="restaurantTable"
          style={{
            width: "97%",
            marginTop: "20px"
          }}
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

export default RestaurantsPartners;
