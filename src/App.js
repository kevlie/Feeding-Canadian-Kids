import React from "react";
import { Switch, Route } from "react-router-dom";
import RestaurantRegistration from "./components/RestaurantRegistration/RestaurantRegistration.component";
import ProgramRegistration from "./components/ProgramRegistration/ProgramRegistration.component";
import "./App.css";

function HomePage() {
  return <h1>Feeding Canadian Kids</h1>;
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route
          exact
          path="/restaurantRegistration"
          component={RestaurantRegistration}
        ></Route>
        <Route
          exact
          path="/programRegistration"
          component={ProgramRegistration}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
