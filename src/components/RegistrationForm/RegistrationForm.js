import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Required, Input } from "../Utils";
import "./RegistrationForm.css";

export default class RegistrationForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>sign up for mental note</h1>
        <form className="RegistrationForm" onSubmit={this.handleSubmit}>
          <div className="name">
            <label htmlFor="RegistrationForm-name">
              Name <Required />
            </label>
            <Input
              name="name"
              type="text"
              required
              id="RegistrationForm-name"
            ></Input>
          </div>
          <div className="email">
            <label htmlFor="RegistaionForm-email">
              Email <Required />
            </label>
            <Input
              name="email"
              type="text"
              required
              id="RegistrationForm-email"
            ></Input>
          </div>
          <div className="password">
            <label htmlFor="RegistrationForm-password">
              Password <Required />
            </label>
            <Input
              name="password"
              type="password"
              required
              id="RegistrationForm-password"
            ></Input>
          </div>
          <Link to="/NoteList">Register</Link>
        </form>
      </div>
    );
  }
}
