import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              <i className="fa fa-reddit" aria-hidden="true" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" activeClassName="active">
              <i className="fa fa-heart" aria-hidden="true" /> Favorites (
              {this.props.faves.length})
            </NavLink>
          </li>
        </ul>
        {this.props.authenticated ? (
          <div>
            <Logout />
          </div>
        ) : (
          <div>
            <NavLink to="/login" className="log">
              <i className="fa fa-sign-in" aria-hidden="true" /> Sign in/up
            </NavLink>
          </div>
        )}
      </nav>
    );
  }
}
