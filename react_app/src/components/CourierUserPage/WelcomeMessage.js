import React from "react";
import { Image } from "react-bootstrap";
import FeedingCKKids from "../../img/FeedingCK-kids.png";
import "./CourierUserPage.css";

class WelcomeMessage extends React.Component {
  render() {
    return (
      <div id="WelcomeMessage">
        <h1>Welcome {this.props.name}!</h1>
        <h2>
          Manage your weekly deliveries and see your partnered restaurants. To
          begin, choose an option from the menu on the top
        </h2>

        <Image className="WelcomeMessage-Image" src={FeedingCKKids}></Image>
      </div>
    );
  }
}
export default WelcomeMessage;
