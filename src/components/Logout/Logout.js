import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { logout } from "../../lib/auth";

export default class Logout extends Component {
  constructor(props) {
    super(props);
    logout();
  }

  render() {
    return <Redirect to="/" />;
  }
}
