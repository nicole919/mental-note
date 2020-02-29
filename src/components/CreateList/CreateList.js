import React, { Component } from "react";
import { Input } from "../Utils";
import config from "../../config";
import { AuthContext } from "../AuthProvider";
import "./CreateList.css";

export default class CreateList extends Component {
  static contextType = AuthContext;
  state = {
    name: "",
    isLoggedIn: false
  };

  goBack = () => {
    this.props.history.goBack();
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const sanitizeName = name.trim();
    if (!sanitizeName) {
      this.setState({ error: "Please enter a category name" });
      return;
    }

    const category = {
      category_name: name
    };

    fetch(`${config.API_ENDPOINT}/categories`, {
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(async res => {
        if (!res.ok) {
          const err = await res.json();
          console.log(`Error is: ${err}`);
          throw err;
        } else {
          this.goBack();
        }
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value, error: null });
  };

  render() {
    if (!this.props.isLoggedIn()) {
      return (
        <h1 className="errorMessage">Please login to create a new category.</h1>
      );
    }
    return (
      <div className="CategoryCreate">
        <form className="CreateListForm" onSubmit={this.handleSubmit}>
          <div className="text">
            <div className="name">
              <label className="formLabel">Category name </label>
              <Input
                required
                placeholder="category name"
                name="name"
                type="text"
                id="CreateListForm_name"
                onChange={this.onChange}
              ></Input>
            </div>
          </div>
          {this.state.error && (
            <div className="errorMessage">{this.state.error}</div>
          )}
          <button type="submit">Create</button>
        </form>
        <div className="CreateACategory">
          <h1 className="formTitle">Add Category</h1>
          <p className="formDescriptionParagraph">
            Can't find the perfect category for your newest Mental Note? Create
            your own!
          </p>
        </div>
      </div>
    );
  }
}
