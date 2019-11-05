import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RestaurantRegistration from "./components/RestaurantRegistration/RestaurantRegistration";
import ProgramRegistration from "./components/ProgramRegistration/ProgramRegistration.component";
import Login from "./components/Login/Login.js";
import "./App.css";
import Header from "./components/Header/Header";

function HomePage() {
  return <h1>Feeding Canadian Kids</h1>;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  // This is a sample that calls testAPI from the Express backend.
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res })) // store the result in this.state.apiResponse
      .catch(err => err);
  }

  componentDidMount() {
    // calls callAPI() once mounted
    this.callAPI();
  }

  render() {
    return (
      <div>
        <Header/>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={Login} />
              <Route
                exact
                path="/restaurantRegistration"
                component={RestaurantRegistration}
              />
              <Route
                exact
                path="/programRegistration"
                component={ProgramRegistration}
              />
            </Switch>
            <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
