import React, { Component } from "react";
import logo from "../../images/helo_logo.png";

class GuestLanding extends Component {
  render() {
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
                        <input placeholder="Enter username.." />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Password:</label>
                      </td>
                      <td>
                        <input placeholder="Enter password.." />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="Btn-container">
                  <button className="btn">Login</button>
                  <button className="btn">Register</button>
                </div>
              </form>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default GuestLanding;
