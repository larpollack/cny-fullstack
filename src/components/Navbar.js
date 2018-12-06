import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

export default class Navbar extends Component {
  render() {
    console.log("props", this.props);
    return (
      <nav className="navbar">
        <div className="navbar-group">
          <div className="navbar-heading">Nav</div>
        </div>
        {this.props.authenticated ? (
          <div>
            <Link to="/favorites">Favorites</Link>
            <span className="divider" />
            <button className="btn" />
            <Logout />
          </div>
        ) : (
          <div>
            <Link to="/login">Register/Log In</Link>
          </div>
        )}
      </nav>
    );
  }
}
