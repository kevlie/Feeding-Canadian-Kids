import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Table } from "react-bootstrap";
import React from "react";

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

  componentWillMount() {
    fetch("http://localhost:9000/api/programPairings")
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
      });
  }

  render() {
    return (
      <div>
        <h1> Your Restaurnt Partners Information</h1>
        <Table striped bordered>
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
