import React, { Component } from "react";
import home from "../../images/home_logo.png";
import add from "../../images/add_logo.png";
import logout from "../../images/logout.png";

class Header extends Component {
  render() {
    return (
      <div className="Header-container">
        <div className="top">
          <div>username</div>
          <img src={home} alt="home logo" className="logo" />
          <img src={add} alt="add" className="logo" />
        </div>
        <div className="bottom">
          <img src={logout} alt="logout" className="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
