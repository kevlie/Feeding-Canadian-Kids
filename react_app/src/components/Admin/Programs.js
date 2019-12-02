import React from "react";
import Sidebar from "./Sidebar";
import "./Programs.css";
import { Button } from "react-bootstrap";
import { CSVLink } from "react-csv";
import csv2json from "csvtojson/v2";

var express_server = process.env.REACT_APP_EXPRESS_SERVER;

class Programs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      programs: [],
      exportData: [],
      error: ""
    };
  }

  componentDidMount = () => {
    fetch(express_server + "/api/admin/programs")
      .then(res => res.json())
      .then(programs => this.setState({ programs }))
      .then(() => this.updateState());
    fetch(express_server + "/api/admin/programs/export")
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
    if (this.state.programs) {
      this.setState({
        numPrograms: this.state.programs.length
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
              fetch(express_server + "/api/admin/programs/import", {
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
      <>
        {!this.state.fail ? (
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
                marginTop: "10px"
              }}
            >
              <div className="export">
                <Button
                  className="exportbutton"
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
              </div>
              <div
                className="upload"
                style={{
                  marginTop: "10px"
                }}
              >
                <Button
                  className="uploadbutton"
                  style={{ marginRight: "10px" }}
                  onClick={() => {
                    this.handleImport();
                  }}
                >
                  Upload CSV
            </Button>
                <input
                  className="choosefile"
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

export default Programs;
