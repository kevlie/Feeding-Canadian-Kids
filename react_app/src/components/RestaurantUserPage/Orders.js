import React from "react";
import { Table } from "react-bootstrap";
import "./Orders.css";
import { withRouter } from "react-router-dom";
import OrderSlot from "./OrderSlot.js";


class Orders extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: this.props.email,
      orders: []
    };

  }

  // bad practice to use post in this case, but makes it so 
  // one doesn't have to deal with security issues involving emails
  getOrders = data =>{
    return new Promise (function(resolve, reject) {
      fetch("http://localhost:9000/api/restaurantuserpage/orders", {
            method: "post",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(data)
          }).then((res) => {
            resolve(res.json())
          })

    });
  }

  componentDidMount(){
    console.log(this.state.email);
    this.getOrders({restaurantEmail: this.state.email})
    .then((value) => {
      let state = {
          email: this.props.email,
          orders: value
      }
      this.setState(state)
      return this.state.orders;
    })
    .then((value) => {
      console.log(value)
    })

  }
  
  render() {
    const orderPrograms = this.state.orders

    const dayToDayTime = {
      Monday: "monday_time",
      Tuesday: "tuesday_time",
      Wednesday: "wednesday_time",
      Thursday: "thursday_time",
      Friday: "friday_time"
    }
    
    const dayToDayMeals = {
      Monday: "monday_meals",
      Tuesday: "tuesday_meals",
      Wednesday: "wednesday_meals",
      Thursday: "thursday_meals",
      Friday: "friday_meals"
    }
    
    
    
    
    const orderDaySelector = (programOrderObj, orderDayTime, orderDayMeals) => {
      if (programOrderObj[orderDayTime] != null){
        return <OrderSlot time = {programOrderObj[orderDayTime]} 
                          address = {programOrderObj.address}
                          meals = {programOrderObj[orderDayMeals]}
                          program = {programOrderObj.name}
                          dietary_restriction = {programOrderObj.dietary_restriction}/>
      }
    }
    
    
    return (
      <>
        <h1> Your Orders for the Week</h1>
        <h2> Click on an order below to see further information</h2>
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
          <tbody>
            <tr>
              <td>
                {orderPrograms.map(member => orderDaySelector(member, dayToDayTime['Monday'], dayToDayMeals['Monday']))}
                {/* <OrderSlot time="5:30" which="0" /> */}
                {/* <OrderSlot time="6:00" which="1" /> */}
                
              </td>
              <td>
                {orderPrograms.map(member => orderDaySelector(member, dayToDayTime['Tuesday'], dayToDayMeals['Tuesday']))}
              </td>
              <td>
                {/* <OrderSlot time="5:00" which="2" /> */}
                {orderPrograms.map(member => orderDaySelector(member, dayToDayTime['Wednesday'], dayToDayMeals['Wednesday']))}
              </td>
              <td>
                {orderPrograms.map(member => orderDaySelector(member, dayToDayTime['Thursday'], dayToDayMeals['Thursday']))}
              </td>
              <td>
                {/* <OrderSlot time="7:00" which="3" /> */}
                {orderPrograms.map(member => orderDaySelector(member, dayToDayTime['Friday'], dayToDayMeals['Friday']))}
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
export default withRouter(Orders);
