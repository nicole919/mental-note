import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Input } from "../Utils";
import config from "../../config";
import { isLoggedIn } from "../../lib/auth";
import "./LoginForm.css";

export default class LoginForm extends Component {
  state = {
    user_name: "",
    password: "",
    routeToNoteList: false,
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

    fetch(`${config.API_ENDPOINT}/auth/login`, {
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
      return <Redirect to="/" />;
    }

    return (
      <div className="Login">
        {this.state.routeToNoteList && <Redirect to="/NoteList" />}
        <div className="WelcomeBack">
          <h1 className="formTitle">Welcome back!</h1>
          <p className="formDescriptionParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
            faucibus nisl tincidunt eget nullam.{" "}
          </p>
        </div>
        <form
          className="LoginForm"
          onSubmit={event => this.handleSubmit(event)}
        >
          <div className="email">
            <label htmlFor="LoginForm-email"> </label>
            <Input
              required
              placeholder="username"
              name="user_name"
              onChange={this.onChange}
              id="LoginForm-email"
            ></Input>
          </div>
          <div className="password">
            <label htmlFor="LoginForm-password"></label>
            <Input
              required
              placeholder="password"
              name="password"
              type="password"
              id="LoginForm-password"
              onChange={this.onChange}
            ></Input>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
