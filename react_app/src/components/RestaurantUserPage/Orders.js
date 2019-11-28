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
  // handleOrders = e => {
  //   e.preventDefault();
  //   this.getOrders({
  //     restaurantEmail: this.state.email
  //   })
  // }

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
    
          // .then(response => {
          //    if(response.status === 404) {
          //      console.log('bumbaclot')
          //    }

          //     if (response.status === 200){
          //         response.json().then(resJSON => {
          //           let state = {
          //             email: this.props.email,
          //             orders: resJSON
          //           }
          //         this.setState(state)
          //         console.log(this.state)
          //         }
          //         )
          //     }
          // })
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

    // .then((value) =>{
    //   console.log(value)
    //   console.log(this.state.orders);
    // })
    

  }
  
  render() {
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
                <OrderSlot time="5:30" which="0" />
                <OrderSlot time="6:00" which="1" />
              </td>
              <td></td>
              <td>
                <OrderSlot time="5:00" which="2" />
              </td>
              <td></td>
              <td>
                <OrderSlot time="7:00" which="3" />
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }
}
export default withRouter(Orders);
