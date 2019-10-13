import React, { Component } from "react";
import Header from "../Header/Header";
import search from "../../images/search_logo.png";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Dashboard-container">
          <div className="Search-container">
            <form className="Search-form">
              <input placeholder="Search by title.." className="Search-input" />
              <button className="Search-btn">
                <img src={search} alt="Post-search" />
              </button>
              <button className="btn">Reset</button>
            </form>
          </div>
          <div className="Posts-container">
            <h1>posts</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
