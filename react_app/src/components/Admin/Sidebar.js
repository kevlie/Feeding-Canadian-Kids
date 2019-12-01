import React from "react";
import './Sidebar.css';
import logo from '../../img/FeedingCK-banner.png';

const mql = window.matchMedia(`(min-width: 800px)`);
 
class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      sidebar: "closedSidebar",
      main: "closedMain",
      users: this.props.users
    }
  }

  openNav = () => {
    this.setState({
      sidebar: "openedSidebar",
      main: "openedMain"
    });
  }

  closeNav = () => {
    this.setState({
      sidebar: "closedSidebar",
      main: "closedMain"
    });
  }

  render() {
    return (
      <div>
      <div id={this.state.sidebar} class="sidebar">
        <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
        <a href="/admin">Admin Home</a>
        <a href="/admin/newSignups">New Sign-Ups</a>
        <a href="/admin/programs">Programs Info</a>
        <a href="/admin/restaurants">Restaurants Info</a>
        <a href="/admin/couriers">Couriers Info</a>
        <a href="/admin/pairing">Programs + Restaurants</a>
        <a href="/admin/courierPairing">Couriers + Restaurants</a>
        <img id="logo" src={ logo }></img>
      </div>

      <div class={this.state.main} id="main">
          <button type="button" id="sidebarCollapse" onClick={this.openNav} class="navbar-btn active">
              <span></span>
              <span></span>
              <span></span>
          </button>
      </div>
      </div>
    );
  }
}

export default Sidebar;