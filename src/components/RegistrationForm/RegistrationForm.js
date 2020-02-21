import React, { Component } from "react";
import { Input } from "../Utils";
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
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/NoteList" />;
    }

    return (
      <div className="Register">
        <form className="RegistrationForm" onSubmit={this.handleSubmit}>
          <div className="name">
            <Input
              placeholder="desired user name"
              name="user_name"
              onChange={this.onChange}
              type="text"
              required
              id="RegistrationForm-name"
            ></Input>
          </div>
          <div className="password">
            <Input
              placeholder="password"
              name="password"
              type="password"
              onChange={this.onChange}
              required
              id="RegistrationForm-password"
            ></Input>
          </div>
          <div className="interests">
            <Input
              placeholder="add your interests"
              name="interests"
              type="text"
              id="RegistrationForm-interests"
              onChange={this.onChange}
            ></Input>
          </div>
          <button type="submit">register</button>
        </form>
        <div className="SignUp">
          <h1 className="formTitle">Sign Up for Mental Note</h1>
          <p className="formDescriptionParagraph">
            Welcome to Mental Note! Signing up is easy - all you have to do is
            pick your user name and password, and put in a few interests. Other
            users will be able to see your user name and interests on your
            profile page.{" "}
          </p>
        </div>
      </div>
    );
  }
}
