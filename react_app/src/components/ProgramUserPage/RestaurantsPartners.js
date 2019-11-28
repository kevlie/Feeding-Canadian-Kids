import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
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
      data: []
    };
  }

  componentWillMount() {
    fetch("http://localhost:9000/api/programPairings")
      .then(res => res.json())
      .then(data => {
        let test1 = {
          name: "k3",
          address: "mkk",
          contact_email: "kwada",
          phone: "adwa"
        };
        let test2 = {
          name: "k3213",
          address: "mk32k",
          contact_email: "kw23ada",
          phone: "a23dwa"
        };
        let test3 = {
          name: "k23",
          address: "m23kk",
          contact_email: "kw23ada",
          phone: "a12dwa"
        };
        this.setState({ data });
      });
  }

  render() {
    return (
      <BootstrapTable data={this.state.data}>
        <TableHeaderColumn dataField="name" isKey>
          Restaurant Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField="address">Address</TableHeaderColumn>
        <TableHeaderColumn dataField="contact_email">
          Contact Email
        </TableHeaderColumn>
        <TableHeaderColumn dataField="phone">Phone Number</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default RestaurantsPartners;
