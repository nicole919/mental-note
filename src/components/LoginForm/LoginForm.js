import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input } from "../Utils";
import "./LoginForm.css";

export default class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>login</h1>
        <form className="LoginForm" onSubmit={this.handleSubmit}>
          <div className="email">
            <label htmlFor="LoginForm-email">Email </label>
            <Input required name="email" id="LoginForm-email"></Input>
            <p></p>
            <label htmlFor="LoginForm-password">Password </label>
            <Input
              required
              name="password"
              type="password"
              id="LoginForm-password"
            ></Input>
          </div>
          <Link to="/NoteList">Login</Link>
        </form>
      </div>
    );
  }
}
