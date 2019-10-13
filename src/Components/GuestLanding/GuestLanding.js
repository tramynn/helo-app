import React, { Component } from "react";
import "../../images/helo_logo.png";

class GuestLanding extends Component {
  render() {
    return (
      <div className="GuestLanding-container">
        <div className="GuestLanding-card">
            <img src={`../../images/helo_logo.png`} alt="Helo logo" />
            <h1>Helo</h1>
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
                  <button>Login</button>
                  <button>Register</button>
                </tbody>
              </table>
            </form>
        </div>
      </div>
    );
  }
}

export default GuestLanding;
