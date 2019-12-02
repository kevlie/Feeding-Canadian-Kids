import React from "react";
import { Table } from "react-bootstrap";
import "./Deliveries.css";
import DeliverySlot from "./DeliverySlot.js";
import "./ProgramUserPage.css";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

class Deliveries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(express_server + "/api/programDelivery", {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(res => res.json())
      .then(json => {
        let data = [];
        let rows = [];
        for (let j = 0; j < 5; j++) {
          let rowData = [];
          for (let i = 0; i < json.length; i++) {
            if (
              json[i].monday_time !== null &&
              json[i].monday_meals !== null &&
              j === 0
            ) {
              rowData.push(
                <DeliverySlot
                  name={json[i].name}
                  address={json[i].address}
                  contact_email={json[i].contact_email}
                  phone={json[i].phone}
                  time={json[i].monday_time}
                  meals={json[i].monday_meals}
                />
              );
            }
            if (
              json[i].tuesday_time !== null &&
              json[i].tuesday_meals !== null &&
              j === 1
            ) {
              rowData.push(
                <DeliverySlot
                  name={json[i].name}
                  address={json[i].address}
                  contact_email={json[i].contact_email}
                  phone={json[i].phone}
                  time={json[i].tuesday_time}
                  meals={json[i].monday_meals}
                />
              );
            }
            if (
              json[i].wednesday_time !== null &&
              json[i].wednesday_meals !== null &&
              j === 2
            ) {
              rowData.push(
                <DeliverySlot
                  name={json[i].name}
                  address={json[i].address}
                  contact_email={json[i].contact_email}
                  phone={json[i].phone}
                  time={json[i].wednesday_time}
                  meals={json[i].monday_meals}
                />
              );
            }
            if (
              json[i].thursday_time !== null &&
              json[i].thursday_meals !== null &&
              j === 3
            ) {
              rowData.push(
                <DeliverySlot
                  name={json[i].name}
                  address={json[i].address}
                  contact_email={json[i].contact_email}
                  phone={json[i].phone}
                  time={json[i].thursday_time}
                  meals={json[i].monday_meals}
                />
              );
            }
            if (
              json[i].friday_time !== null &&
              json[i].friday_meals !== null &&
              j === 4
            ) {
              rowData.push(
                <DeliverySlot
                  name={json[i].name}
                  address={json[i].address}
                  contact_email={json[i].contact_email}
                  phone={json[i].phone}
                  time={json[i].friday_time}
                  meals={json[i].monday_meals}
                />
              );
            }
          }
          rows.push(<td> {rowData} </td>);
        }
        data.push(<tr> {rows} </tr>);
        this.setState({ data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div id="deliveries">
        <h1> Your Deliveries for the Week</h1>
        <h2> Click on a scheduled delivery below to see further information</h2>
        <Table striped bordered size="sm">
          <thead>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>{this.state.data}</tbody>
        </Table>
      </div>
    );
  }
}
export default Deliveries;
