import React, { Component } from "react";
import { Input } from "../Utils";
import config from "../../config";
import "./CreateList.css";

export default class CreateList extends Component {
  state = {
    name: ""
  };

  goBack = () => {
    this.props.history.goBack();
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
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
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>add category</h1>
        <form className="CreateListForm" onSubmit={this.handleSubmit}>
          <div className="text">
            <div className="name">
              <label htmlFor="CreateListForm">
                Category Name {/*required*/}
              </label>
              <Input
                name="name"
                type="text"
                required
                id="CreateListForm_name"
                onChange={this.onChange}
              ></Input>
              <button type="submit">Create</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
