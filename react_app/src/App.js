import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RestaurantRegistration from "./components/RestaurantRegistration/RestaurantRegistration.component";
import ProgramRegistration from "./components/ProgramRegistration/ProgramRegistration.component";
import Login from "./components/Login/Login.js";
import "./App.css";


function HomePage() {
  return (
    <h1>Feeding Canadian Kids</h1>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={Login} />
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
        <p className="App-intro">{this.state.apiResponse}</p>
      </div >
    );
  }
}

export default App;
