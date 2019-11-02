import React from "react";
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
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/login' component={Login}/>
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
    </div>
  );
}

export default App;
