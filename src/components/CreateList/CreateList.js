import React, { Component } from "react";
import { Input } from "../Utils";
import { Link } from "react-router-dom";
import "./CreateList.css";

export default class NewItemAteForm extends Component {
  render() {
    return (
      <div>
        <h1>add category</h1>
        <form className="CreateListForm">
          <div className="text">
            <div className="name">
              <label htmlFor="CreateListForm">
                Category Name {/*required*/}
              </label>
              <Input
                name="name"
                type="text"
                //required
                id="CreateListForm_name"
              ></Input>
              <Link to="/NoteList">Add Category</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
