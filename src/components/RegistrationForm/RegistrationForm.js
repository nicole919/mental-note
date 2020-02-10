import React, { Component } from "react";
import { Required, Input } from "../Utils";
import { Redirect } from "react-router-dom";
import config from "../../config";
import { isLoggedIn } from "../../lib/auth";
import "./RegistrationForm.css";

export default class RegistrationForm extends Component {
  state = {
    user_name: "",
    password: "",
    interests: "",
    isLoggedIn: false
  };
  constructor(props) {
    super(props);
    if (isLoggedIn()) {
      this.state.isLoggedIn = true;
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(async res => {
        if (!res.ok) {
          const err = await res.json();
          console.log(`Error is: ${err}`);
          throw err;
        }
        return res.json();
      })
      .then(data => {
        localStorage.setItem("token", data.authToken);
        this.setState({ isLoggedIn: true });
        console.log(this.props);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = e => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/notes" />;
    }

    return (
      <div>
        <h1>sign up for mental note</h1>
        <form className="RegistrationForm" onSubmit={this.handleSubmit}>
          <div className="name">
            <label htmlFor="RegistrationForm-name">
              Name <Required />
            </label>
            <Input
              name="user_name"
              onChange={this.onChange}
              type="text"
              required
              id="RegistrationForm-name"
            ></Input>
          </div>
          <div className="password">
            <label htmlFor="RegistrationForm-password">
              Password <Required />
            </label>
            <Input
              name="password"
              type="password"
              onChange={this.onChange}
              required
              id="RegistrationForm-password"
            ></Input>
          </div>
          <div className="interests">
            <label htmlFor="RegistrationForm-interests">Interests</label>
            <Input
              name="interests"
              type="text"
              id="RegistrationForm-interests"
              onChange={this.onChange}
            ></Input>
          </div>
          <button type="submit">register</button>
        </form>
      </div>
    );
  }
}
