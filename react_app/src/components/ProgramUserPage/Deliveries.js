import React from "react";
import { Table } from "react-bootstrap";
import "./Deliveries.css";
import DeliverySlot from "./DeliverySlot.js";

class Deliveries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }

  componentWillMount() {
    fetch("http://localhost:9000/api/programDelivery")
      .then(res => res.json())
      .then(data => {
        let info = [];
        let rows = [];
        for (let j = 0; j < 5; j++) {
          let rowData = [];
          for (let i = 0; i < data.length; i++) {
            if (
              data[i].monday_time !== null &&
              data[i].monday_meals !== null &&
              j === 0
            ) {
              rowData.push(
                <DeliverySlot
                  name={data[i].name}
                  address={data[i].address}
                  contact_email={data[i].contact_email}
                  phone={data[i].phone}
                  time={data[i].monday_time}
                  meals={data[i].monday_meals}
                />
              );
            }
            if (
              data[i].tuesday_time !== null &&
              data[i].tuesday_meals !== null &&
              j === 1
            ) {
              rowData.push(
                <DeliverySlot
                  name={data[i].name}
                  address={data[i].address}
                  contact_email={data[i].contact_email}
                  phone={data[i].phone}
                  time={data[i].tuesday_time}
                  meals={data[i].monday_meals}
                />
              );
            }
            if (
              data[i].wednesday_time !== null &&
              data[i].wednesday_meals !== null &&
              j === 2
            ) {
              rowData.push(
                <DeliverySlot
                  name={data[i].name}
                  address={data[i].address}
                  contact_email={data[i].contact_email}
                  phone={data[i].phone}
                  time={data[i].wednesday_time}
                  meals={data[i].monday_meals}
                />
              );
            }
            if (
              data[i].thursday_time !== null &&
              data[i].thursday_meals !== null &&
              j === 3
            ) {
              rowData.push(
                <DeliverySlot
                  name={data[i].name}
                  address={data[i].address}
                  contact_email={data[i].contact_email}
                  phone={data[i].phone}
                  time={data[i].thursday_time}
                  meals={data[i].monday_meals}
                />
              );
            }
            if (
              data[i].friday_time !== null &&
              data[i].friday_meals !== null &&
              j === 4
            ) {
              rowData.push(
                <DeliverySlot
                  name={data[i].name}
                  address={data[i].address}
                  contact_email={data[i].contact_email}
                  phone={data[i].phone}
                  time={data[i].friday_time}
                  meals={data[i].monday_meals}
                />
              );
            }
          }
          rows.push(<td> {rowData} </td>);
        }
        info.push(<tr> {rows} </tr>);
        this.setState({ info });
      });
  }
  render() {
    return (
      <>
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
          <tbody>{this.state.info}</tbody>
        </Table>
      </>
    );
  }
}
export default Deliveries;
