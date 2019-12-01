import React from "react";
import { Image } from "react-bootstrap";
import FeedingCKKids from "../../img/FeedingCK-kids.png";
import "./RestaurantUserPage.css";

class WelcomeMessage extends React.Component {
  render() {
    return (
      <div id="WelcomeMessage">
        <h1>
          {"Welcome "} {this.props.name} {"!"}
        </h1>
        <h2>
          Manage your weekly orders and see your partnered programs. To begin,
          choose an option from the menu on the left
        </h2>

        <Image className="WelcomeMessage-Image" src={FeedingCKKids}></Image>
      </div>
    );
  }
}
export default WelcomeMessage;
