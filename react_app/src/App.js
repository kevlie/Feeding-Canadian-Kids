import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import RestaurantRegistration from "./components/RestaurantRegistration/RestaurantRegistration";
import ProgramRegistration from "./components/ProgramRegistration/ProgramRegistration";
import CourierRegistration from "./components/CourierRegistration/CourierRegistration";
import RestaurantUserPage from "./components/RestaurantUserPage/RestaurantUserPage.js";
import ProgramUserPage from "./components/ProgramUserPage/ProgramUserPage.js";
import CourierUserPage from "./components/CourierUserPage/CourierUserPage.js";
import Login from "./components/Login/Login.js";
import "./App.css";
import Header from "./components/Header/Header";

import Admin from "./components/Admin/Admin";
import NewSignups from "./components/Admin/NewSignups";
import NewSignupsProgramInfo from "./components/Admin/NewSignupsProgramInfo";
import NewSignupsRestaurantInfo from "./components/Admin/NewSignupsRestaurantInfo";
import Programs from "./components/Admin/Programs";
import Restaurants from "./components/Admin/Restaurants";
import ProgramInfo from "./components/Admin/ProgramInfo";
import RestaurantInfo from "./components/Admin/RestaurantInfo";
import Pairing from "./components/Admin/Pairing";

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
            path="/registrationcomplete"
            component={RegistrationComplete}
          />
          <Route
            exact
            path="/courierRegistration"
            component={CourierRegistration}
          />
          <Route exact path="/admin/newSignups" component={NewSignups} />
          <Route
            path="/admin/newSignups/program/:id"
            component={NewSignupsProgramInfo}
          />
          <Route
            exact
            path="/admin/newSignups/restaurant/:id"
            component={NewSignupsRestaurantInfo}
          />
          <Route
            exact
            path="/restaurantapprovalpage"
            component={NewSignupsRestaurantInfo}
          />

          <Route
            exact
            path="/restaurantuserpage"
            component={RestaurantUserPage}
          />
          <Route exact path="/courieruserpage" component={CourierUserPage} />
          <Route exact path="/programuserpage" component={ProgramUserPage} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/new" component={NewSignups} />
          <Route exact path="/admin/programs" component={Programs} />
          <Route exact path="/admin/restaurants" component={Restaurants} />
          <Route exact path="/admin/program/:id" component={ProgramInfo} />
          <Route
            exact
            path="/admin/restaurant/:id"
            component={RestaurantInfo}
          />
          <Route exact path="/admin/pairing" component={Pairing} />
        </Switch>
      </div>
    );
  }
}

export default App;
