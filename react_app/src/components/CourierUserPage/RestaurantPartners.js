import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Table } from "react-bootstrap";
import React from "react";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;


class RestaurantPartners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      fail: false
    };
  }

  componentDidMount() {
    fetch(express_server + "/api/courieruserpage/restaurants", {
      method: "get",

      credentials: "include"
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
          <div
            style={{
              fontFamily:"Comic Sans MS"
            }}
          >
            <h1> Your Restaurant Partners Information</h1>
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
        ) : (
          <h1>You have not been paired with a restaurant yet.</h1>
        )}
      </>
    );
  }
}

export default RestaurantPartners;
