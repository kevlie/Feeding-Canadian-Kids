import React from "react";
import { Image } from "react-bootstrap";
import FeedingCKKids from "../../img/FeedingCK-kids.png";
import "./CourierUserPage.css";

class WelcomeMessage extends React.Component {
  render() {
    return (
      <div id="cWelcomeMessage">
        <h1>Welcome {this.props.name}!</h1>
        <h2>
          Choose the option on the left to see all your partnered restaurants!
        </h2>

        <Image className="cWelcomeMessage-Image" src={FeedingCKKids}></Image>
      </div>
    );
  }
}
export default WelcomeMessage;
