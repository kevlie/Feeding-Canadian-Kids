import React from "react";
import Sidebar from "./Sidebar";
import "./NewSignups.css";
import NewSignupsPrograms from "./NewSignupsPrograms";

class NewSignups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        [
          { id: 1, name: "name1", address: "address1" },
          { id: 2, name: "name2", address: "address2" }
        ],
        [
          { id: 1, name: "name1", address: "address1" },
          { id: 2, name: "name2", address: "address2" },
          { id: 3, name: "name3", address: "address3" }
        ],
        []
      ],
      programIndices: [],
      restaurantIndices: [{}, {}, {}, {}, {}, {}]
    };
  }

  addIndices = () => {
    var indices1 = [];
    var i = 0;

    var indices2 = [];
    var j = 0;

    this.state.values[0].map(function(item) {
      indices1.push(i);
      i++;
    });

    this.state.values[1].map(function(item) {
      indices2.push(j);
      j++;
    });

    this.setState({
      programIndices: indices1,
      restaurantIndices: indices2
    });

    console.log(this.state.programIndices);
    console.log(this.state.restaurantIndices);
  };

  componentDidMount = () => {
    fetch("http://localhost:9000/api/admin/newSignups")
      .then(res => res.json())
      .then(values =>
        this.setState({ values }, () => console.log(this.state.values))
      )
      .then(() => this.addIndices());
  };

  // { this.state.restaurantIndices.map(function(num) {
  // 	oddOrEven === "even" ? oddOrEven = "odd" : oddOrEven = "even";
  // 	return <NewSignupsPrograms status = { oddOrEven } />
  // })}

  render() {
    var oddOrEven = "even";
    var indices = this.state.restaurantIndices;

    var rows1 = [];
    var rows2 = [];

    for (var i = 0; i < this.state.values[0].length; i++) {
      oddOrEven === "even" ? (oddOrEven = "odd") : (oddOrEven = "even");
      var cell = [];
      var program = this.state.values[0][i];
      cell.push(
        <td>
          <a href={"newSignups/program/" + program["id"]}>
            {" "}
            {program["name"]}{" "}
          </a>
        </td>
      );
      cell.push(<td> {program["address"]} </td>);
      rows1.push(<tr id={oddOrEven}> {cell} </tr>);
    }

    oddOrEven = "even";

    for (var i = 0; i < this.state.values[1].length; i++) {
      oddOrEven === "even" ? (oddOrEven = "odd") : (oddOrEven = "even");
      var cell = [];
      var restaurant = this.state.values[1][i];
      cell.push(
        <td>
          <a href={"newSignups/restaurant/" + restaurant["id"]}>
            {" "}
            {restaurant["name"]}{" "}
          </a>
        </td>
      );
      cell.push(<td> {restaurant["address"]} </td>);
      rows2.push(<tr id={oddOrEven}> {cell} </tr>);
    }

    return (
      <div>
        <Sidebar />
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">New Signups</h1>
            <p class="lead">
              Following tables list the programs and restaurants who have
              requested to join Feeding Canadian Kids
            </p>
          </div>
        </div>

        <table id="programTable">
          <tr>
            <th id="tableHeader">Program Name</th>
            <th id="tableHeader">Program Address</th>
          </tr>
          {rows1}
        </table>

        <table id="restaurantTable">
          <tr>
            <th id="tableHeader">Restaurant Name</th>
            <th id="tableHeader">Restaurant Address</th>
          </tr>
          {rows2}
        </table>

        <div id="footer"></div>
      </div>
    );
  }
}

export default NewSignups;
