import React from "react";
import Sidebar from "./Sidebar";
import "./Programs.css";
import { Button } from "react-bootstrap";
import { CSVLink } from "react-csv";
import csv2json from "csvtojson/v2";

class Programs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      //values: [[{"id": 1, "name": "name1", "address": "address1"}, {"id": 2, "name": "name2", "address": "address2"}],
      //		 [{"id": 1, "name": "name1", "address": "address1"}, {"id": 2, "name": "name2", "address": "address2"}, {"id": 3, "name": "name3", "address": "address3"}]],
      programs: [],
      exportData: []
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:9000/api/admin/programs")
      .then(res => res.json())
      .then(programs => this.setState({ programs }))
      .then(() => this.updateState());
    fetch("http://localhost:9000/api/admin/programs/export")
      .then(res => res.json())
      .then(exportData => this.setState({ exportData }));
  };

  updateState() {
    if (this.state.programs) {
      this.setState({
        numPrograms: this.state.programs.length
      });
    }
  }

  handleImport() {
    if (this.state.uploadCSVData) {
      this.state.uploadCSVData
        .text()
        .then(text => {
          csv2json()
            .fromString(text)
            .then(json => {
              console.log(json);
              fetch("http://localhost:9000/api/admin/programs/import", {
                method: "post",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(json)
              }).then(() => {
                console.log("successful!");
              });
            });
        })
        .catch(err => {
          console.log("unsuccessful!");
        });
    } else {
      console.log("No File Found");
    }
  }

  render() {
    var oddOrEven = "even";
    var indices = this.state.restaurantIndices;

    const numPrograms = this.state.numPrograms;

    var rows1 = [];

    for (var i = 0; i < numPrograms; i++) {
      oddOrEven === "even" ? (oddOrEven = "odd") : (oddOrEven = "even");
      var cell = [];
      var program = this.state.programs[i];
      cell.push(
        <td>
          <a href={"program/" + program["program_id"]}> {program["name"]} </a>
        </td>
      );
      cell.push(<td> {program["address"]} </td>);
      rows1.push(<tr id={oddOrEven}> {cell} </tr>);
    }

    return (
      <div id="programs">
        <Sidebar />
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Programs</h1>
            <p class="lead">
              Following table lists the programs signed-up with Feeding Canadian
              Kids
            </p>
          </div>
        </div>

        <h3 class="tableHeadings">Programs</h3>

        <table id="programTable">
          <tr>
            <th id="tableHeader">Program Name</th>
            <th id="tableHeader">Program Address</th>
          </tr>
          {rows1}
        </table>
        <div
          style={{
            textAlign: "center",
            marginTop: "10px"
          }}
        >
          <Button
            style={{
              marginRight: "5px"
            }}
          >
            <CSVLink
              data={this.state.exportData}
              filename={"program_data"}
              style={{
                color: "white"
              }}
            >
              Export CSV
            </CSVLink>
          </Button>
          <div
            style={{
              marginTop: "10px"
            }}
          >
            <Button
              style={{ marginRight: "10px" }}
              onClick={() => {
                this.handleImport();
              }}
            >
              Upload CSV
            </Button>
            <input
              type="file"
              style={{ marginLeft: "10px" }}
              onChange={e => {
                this.setState({
                  uploadCSVData: e.target.files[0]
                });
              }}
            />
          </div>
        </div>
        <div id="footer"></div>
      </div>
    );
  }
}

export default Programs;
