import React from "react";
import Sidebar from "./Sidebar";
import "./Admin.css";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [{}, {}, {}, {}, {}, {}],
      fail: false
    };
  }

  componentDidMount = () => {
    fetch(express_server + "/api/admin")
      .then(res => res.json())
      .then(values =>
        this.setState({ values }, () => console.log(this.state.values))
      );

    fetch(express_server + "/api/admin/isAdmin", {
      method: "get",
      credentials: "include"
    }).then(res => {
      if (res.status != 200) {
        this.setState({ fail: true });
        console.log(this.state.fail);
      }
    });
  };

  render() {
    return (
      <>
        {!this.state.fail ? (
          <div>
            <Sidebar />
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4 programText">Welcome Admin</h1>
                <p class="lead programText">
                  This is the Admin's Portal. Here you can manage new partner
                  sign up requests, view existing partners' info, and pair a
                  program partner with a restaurant.
                </p>
              </div>
            </div>
            <div>
              <div class="first tab">
                <div id="number" class="programText">
                  {this.state.values[0]["programs"]}
                </div>
                <div id="program" class="programText">
                  Active Programs
                </div>
              </div>

              <div class="tab">
                <div id="number" class="programText">
                  {this.state.values[1]["restaurants"]}
                </div>
                <div id="program" class="programText">
                  Active Restaurants
                </div>
              </div>

              <div class="tab">
                <div id="number" class="programText">
                  {this.state.values[5]["couriers"]}
                </div>
                <div id="program" class="programText">
                  Active Couriers
                </div>
              </div>
            </div>

            <div>
              <div class="tab">
                <div id="number" class="programText">
                  {this.state.values[2]["newPrograms"]}
                </div>
                <div id="program" class="programText">
                  New Programs
                </div>
              </div>

              <div class="tab">
                <div id="number" class="programText">
                  {this.state.values[3]["newRestaurants"]}
                </div>
                <div id="program" class="programText">
                  New Restaurants
                </div>
              </div>
              <div class="tab">
                <div id="number" class="programText">
                  {this.state.values[4]["newCouriers"]}
                </div>
                <div id="program" class="programText">
                  New Couriers
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h4> You do not have the permissions to access this page.</h4>
        )}
      </>
    );
  }
}

export default Admin;
