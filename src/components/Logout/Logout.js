import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../../lib/auth";
import { AuthContext } from "../AuthProvider";

export default class Logout extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    logout();
    this.context.setLoggedIn(false);
  }

  render() {
    return <Redirect to="/" />;
  }
}
