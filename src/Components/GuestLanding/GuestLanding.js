import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getSession,
  registerUser,
  loginUser
} from "../../redux/reducers/authReducer";
import { Redirect } from "react-router-dom";
import logo from "../../images/helo_logo.png";

class GuestLanding extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    this.props.getSession();
  }

  handleRegister = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { registerUser } = this.props;
    registerUser({ username, password });
  };

  handleLogin = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { loginUser } = this.props;
    loginUser({ username, password });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (this.props.user_id) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="GuestLanding-container">
        <div className="GuestLanding-card">
          <div className="GuestLanding-content">
            <header className="GuestLanding-header">
              <img src={logo} alt="Helo logo" />
              <h1 className="GuestLanding-title">Helo</h1>
            </header>
            <main>
              <form>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label>Username:</label>
                      </td>
                      <td>
                        <input
                          name="username"
                          value={this.state.username}
                          placeholder="Enter username.."
                          onChange={this.handleInput}
                          autoFocus
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Password:</label>
                      </td>
                      <td>
                        <input
                          name="password"
                          value={this.state.password}
                          placeholder="Enter password.."
                          type="password"
                          onChange={this.handleInput}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="Btn-container">
                  <button className="btn" onClick={this.handleLogin}>
                    Login
                  </button>
                  <button className="btn" onClick={this.handleRegister}>
                    Register
                  </button>
                </div>
              </form>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id
  };
};

export default connect(
  mapStateToProps,
  {
    getSession,
    loginUser,
    registerUser
  }
)(GuestLanding);
