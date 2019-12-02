import React from "react";
import Sidebar from "./Sidebar";
import "./Restaurants.css";
import { Button } from "react-bootstrap";
import { CSVLink } from "react-csv";
import csv2json from "csvtojson/v2";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

class Restaurants extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      exportData: [],
      error: ""
    };
  }

  componentDidMount = () => {
    fetch(express_server + "/api/admin/restaurants")
      .then(res => res.json())
      .then(restaurants => this.setState({ restaurants }))
      .then(() => this.updateState());

    fetch(express_server + "/api/admin/restaurants/export")
      .then(res => res.json())
      .then(exportData => this.setState({ exportData }));

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

  updateState() {
    if (this.state.restaurants) {
      this.setState({
        numRestaurants: this.state.restaurants.length
      });
    }
  }

  handleImport() {
    if (
      this.state.uploadCSVData &&
      this.state.uploadCSVData.name.includes(".csv")
    ) {
      this.state.uploadCSVData
        .text()
        .then(text => {
          csv2json()
            .fromString(text)
            .then(json => {
              console.log(json);
              fetch(express_server + "/api/admin/restaurants/import", {
                method: "post",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(json)
              }).then(() => {
                window.location.reload();
              });
            });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            error: "Error!"
          });
        });
    } else {
      this.setState({
        error: "Please upload a CSV file!"
      });
    }
  }

  render() {
    var oddOrEven = "even";
    var indices = this.state.restaurantIndices;

    const numRestaurants = this.state.numRestaurants;

    var rows1 = [];

    for (var i = 0; i < numRestaurants; i++) {
      oddOrEven === "even" ? (oddOrEven = "odd") : (oddOrEven = "even");
      var cell = [];
      var restaurant = this.state.restaurants[i];
      cell.push(
        <td>
          <a href={"restaurant/" + restaurant["restaurant_id"]}>
            {" "}
            {restaurant["name"]}{" "}
          </a>
        </td>
      );
      cell.push(<td> {restaurant["address"]} </td>);
      rows1.push(<tr id={oddOrEven}> {cell} </tr>);
    }

    return (
      <>
        {!this.state.fail ? (
          <div id="restaurants">
            <Sidebar />
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">Restaurants</h1>
                <p class="lead">
                  Following table lists the restaurants signed-up with Feeding
                  Canadian Kids
            </p>
              </div>
            </div>

            <h3 class="tableHeadings">Restaurants</h3>

            <table id="restaurantTable">
              <tr>
                <th id="tableHeader">Restaurant Name</th>
                <th id="tableHeader">Restaurant Address</th>
              </tr>
              {rows1}
            </table>
            <div
              style={{
                marginTop: "10px"
              }}
            >
              <div className="restexport">
                <Button
                  className="restexportbutton"
                  style={{
                    marginRight: "5px"
                  }}
                >
                  <CSVLink
                    data={this.state.exportData}
                    filename={"restaurant_data"}
                    style={{
                      color: "white"
                    }}
                  >
                    Export CSV
              </CSVLink>
                </Button>
              </div>
              <div
                className="restupload"
                style={{
                  marginTop: "10px"
                }}
              >
                <Button
                  className="restuploadbutton"
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    this.handleImport();
                  }}
                >
                  Upload CSV
            </Button>
                <input
                  className="restchoosefile"
                  type="file"
                  style={{ marginLeft: "10px" }}
                  onChange={e => {
                    this.setState({
                      uploadCSVData: e.target.files[0]
                    });
                  }}
                />
                <p className="error">{this.state.error}</p>
              </div>
            </div>
            <div id="footer"></div>
          </div>
        ) : (
            <h4> You do not have the permissions to access this page.</h4>
          )}
      </>
    )
  }
}

export default Restaurants;
