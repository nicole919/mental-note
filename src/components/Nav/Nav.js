import React, { Component } from "react";
import { AuthContext } from "../AuthProvider";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authContext => (
          <>
            <nav>
              {authContext.loggedIn && (
                <span className="NavLink">
                  {" "}
                  <Link to="/NoteList">Notes</Link>
                </span>
              )}
              {authContext.loggedIn && (
                <span className="NavLink">
                  {" "}
                  <Link to="/Feed">Feed</Link>
                </span>
              )}
              {!authContext.loggedIn && (
                <span className="NavLink">
                  <Link to="LoginForm"> Login</Link>
                </span>
              )}
              {!authContext.loggedIn && (
                <span className="NavLink">
                  <Link to="/RegistrationForm">Sign Up</Link>
                </span>
              )}
              {authContext.loggedIn && (
                <span className="NavLink">
                  <Link to="Logout">Logout</Link>
                </span>
              )}
            </nav>
          </>
        )}
      </AuthContext.Consumer>
    );
  }
}
