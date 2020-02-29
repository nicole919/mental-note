import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Input } from "../Utils";
import config from "../../config";
import { isLoggedIn } from "../../lib/auth";
import { AuthContext } from "../AuthProvider";
import "./LoginForm.css";

export default class LoginForm extends Component {
  static contextType = AuthContext;
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
        this.context.setLoggedIn(true);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: null });
  };

  render() {
    if (this.state.isLoggedIn) {
      return <Redirect to="/NoteList" />;
    }

    return (
      <div className="Login">
        {this.state.routeToNoteList && <Redirect to="/NoteList" />}
        <div className="WelcomeBack">
          <h1 className="formTitle">Welcome back!</h1>
          <p className="formDescriptionParagraph">
            Ready to add something new? Or maybe you want to suggest something
            to your friends? Let's do it!{" "}
          </p>
        </div>
        <form
          className="LoginForm"
          onSubmit={event => this.handleSubmit(event)}
        >
          <div className="email">
            <label className="formLabel">Username </label>
            <Input
              required
              placeholder="username"
              name="user_name"
              onChange={this.onChange}
              id="LoginForm-email"
            ></Input>
          </div>
          <div className="password">
            <label className="formLabel">Password </label>
            <Input
              required
              placeholder="password"
              name="password"
              type="password"
              id="LoginForm-password"
              onChange={this.onChange}
            ></Input>
          </div>
          {this.state.error && (
            <div className="errorMessage">
              username or password is incorrect
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
