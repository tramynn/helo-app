import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link, withRouter } from "react-router-dom";
import { getSession, logoutUser } from "../../redux/reducers/authReducer";
import home from "../../images/home_logo.png";
import add from "../../images/add_logo.png";
import logout from "../../images/logout.png";

class Header extends Component {
  componentDidMount() {
    this.props.getSession();
  }

  handleLogout = () => {
    const { logoutUser } = this.props;
    logoutUser();
    this.props.history.push("/");
  };

  render() {
    if (!this.props.user_id) {
      return <Redirect to="/" />;
    }

    const { username } = this.props;
    return (
      <div className="Header-container">
        <div className="top">
          <div>{username}</div>
          <Link to="/dashboard">
            <img src={home} alt="home logo" className="logo" />
          </Link>
          <Link to="/addPost">
            <img src={add} alt="add" className="logo" />
          </Link>
        </div>
        <div className="bottom">
          <img
            src={logout}
            alt="logout"
            className="logo"
            onClick={this.handleLogout}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id,
    username: reduxState.authReducer.username
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      getSession,
      logoutUser
    }
  )(Header)
);
