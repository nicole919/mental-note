import React, { Component } from "react";
import { Textarea, Input } from "../Utils";
import { Redirect } from "react-router-dom";
import config from "../../config";
import "./CreateNote.css";

export default class CreateNote extends Component {
  state = {
    title: "",
    category_id: "",
    whereat: "",
    comments: "",
    formValid: false,
    titleValid: false,
    validationMessage: null,
    categories: [],
    routeToNoteList: false
  };

  fetchCategories() {
    fetch(`${config.API_ENDPOINT}/categories`, {
      method: "GET",
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
        this.setState({ categories: data });
      })
      .catch(error => {
        this.setState({ error });
      });
  }
  componentDidMount() {
    this.fetchCategories();
  }
  goBack = () => {
    this.props.history.goBack();
  };
  updateFormEntry(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  validateEntry(name, value) {
    let hasErrors = false;

    value = value.trim();
    if (name === "title") {
      if (value.length < 1) {
        hasErrors = true;
      } else {
        hasErrors = false;
      }
      this.setState(
        {
          [`${name}Valid`]: !hasErrors
        },
        this.formValid
      );
    }
  }

  formValid() {
    const { titleValid } = this.state;
    if (titleValid === true) {
      this.setState({
        formValid: true,
        validationMessage: null
      });
    } else {
      this.setState({
        formValid: !this.formValid,
        validationMessage: "Please fill out required fields"
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, category_id, whereat, comments } = this.state;
    const note = {
      title: title,
      category_id: category_id,
      whereat: whereat,
      comments: comments
    };
    this.setState({ routeToNoteList: true });

    fetch(`${config.API_ENDPOINT}/notes`, {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "content-type": "application/json",
        bearer: "authToken"
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
        this.context.addNote(data);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <>
        {this.state.routeToNoteList && <Redirect to="/NoteList" />}
        <h1>add new note</h1>
        <form className="CreateNoteForm" onSubmit={this.handleSubmit}>
          <div className="text">
            <div className="name">
              <label htmlFor="CreateNoteForm-title">Title {/*required*/}</label>
              <Input
                name="title"
                type="text"
                required
                id="CreateNoteForm-title"
                onChange={event => this.updateFormEntry(event)}
              ></Input>
            </div>
            <div className="category">
              <label htmlFor="category">category</label>
              <select id="category-select">
                <option value={null}>...</option>
                {this.state.categories.map(category => (
                  <option
                    key={category.category_id}
                    value={category.category_id}
                  >
                    {category.category_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="when">
            <label htmlFor="CreateNoteForm-where">Where can you find it?</label>
            <Input
              name="when"
              type="text"
              id="CreateNoteForm-where"
              onChange={event => this.updateFormEntry(event)}
            ></Input>
          </div>
          <div className="comments">
            <label htmlFor="CreateNoteForm-comments">Additional notes</label>
            <Textarea
              name="comments"
              type="text"
              id="CreateNoteForm-comments"
              onChange={event => this.updateFormEntry(event)}
            ></Textarea>
          </div>
        </form>
        <button type="submit" className="button">
          save note
        </button>
      </>
    );
  }
}
