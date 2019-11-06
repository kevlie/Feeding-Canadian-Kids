import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RestaurantRegistration from "./components/RestaurantRegistration/RestaurantRegistration";
import ProgramRegistration from "./components/ProgramRegistration/ProgramRegistration.component";
import RestaurantUserPage from './components/RestaurantUserPage/RestaurantUserPage.js';
import Login from "./components/Login/Login.js";
import "./App.css";
import Header from "./components/Header/Header";
import Admin from "./components/Admin/Admin";
import NewSignups from "./components/Admin/NewSignups";

function HomePage() {
  return <h1></h1>;
}
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
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
          <Route
            exact
            path="/restaurantuserpage"
            component={RestaurantUserPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
