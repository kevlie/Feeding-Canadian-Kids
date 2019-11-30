import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Table } from "react-bootstrap";
import React from "react";

// const columns = [
//   {
//     dataField: "name",
//     text: "Restaurant Name"
//   },
//   {
//     dataField: "address",
//     text: "Address"
//   },
//   {
//     dataField: "contact_email",
//     text: "Email"
//   },
//   {
//     dataField: "phone",
//     text: "Phone Number"
//   }
// ];

class RestaurantPartners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      fail: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/api/courieruserpage/restaurants", {
      method: "get",
      // headers: {
      //   Accept: "application/json",
      //   "Content-Type": "application/json"
      // },
      credentials: "include"
      // body: JSON.stringify({ email: this.props.email })
    }).then(res => {
      console.log(res);
      if (res.status != 200) {
        this.setState({ fail: true });
      } else {
        res.json().then(data => {
          console.log(data);
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
    });
  }

  render() {
    return (
      <>
        {!this.state.fail ? (
          <div>
            <h1> Your Restaurant Partners Information</h1>
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
        ) : (
          <h1>You have not been paired with a restaurant yet.</h1>
        )}
      </>
    );
  }
}

export default RestaurantPartners;
