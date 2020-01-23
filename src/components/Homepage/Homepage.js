import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <h1>Mental Note</h1>

        <section>
          <p>this is where I tell you about the app:)</p>
        </section>
        <section>
          <Link to="/RegistrationForm">Sign Up</Link>| |
          <Link to="LoginForm">Login</Link>
        </section>
      </div>
    );
  }
}
