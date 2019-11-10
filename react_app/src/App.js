import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RestaurantRegistration from "./components/RestaurantRegistration/RestaurantRegistration";
import ProgramRegistration from "./components/ProgramRegistration/ProgramRegistration";
import RestaurantUserPage from "./components/RestaurantUserPage/RestaurantUserPage.js";
import Login from "./components/Login/Login.js";
import "./App.css";
import Header from "./components/Header/Header";

import Admin from "./components/Admin/Admin";
import NewSignups from "./components/Admin/NewSignups";
import NewSignupsProgramInfo from "./components/Admin/NewSignupsProgramInfo";
import NewSignupsRestaurantInfo from "./components/Admin/NewSignupsRestaurantInfo";
import RegistrationComplete from "./components/RegistrationComplete/RegistrationComplete";

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
            path="/RegistrationComplete"
            component={RegistrationComplete}
          />
          <Route
            exact
            path="/admin/newSignups"
            component={NewSignups} />
          <Route
            exact
            path="/admin/newSignups/program/:id"
            component={NewSignupsProgramInfo} />
          <Route
            exact
            path="/admin/newSignups/restaurant/:id"
            component={NewSignupsRestaurantInfo} />
            path="/restaurantuserpage"
            component={RestaurantUserPage}
          />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/new" component={NewSignups} />
        </Switch>
      </div>
    );
  }
}

export default App;
