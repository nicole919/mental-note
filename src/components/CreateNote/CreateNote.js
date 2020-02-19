import React, { Component } from "react";
import { Textarea, Input } from "../Utils";
import { Redirect } from "react-router-dom";
import { getAuthToken, getUserId } from "../../lib/auth";
import config from "../../config";
import ApiContext from "../../ApiContext";
import "./CreateNote.css";

export default class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  static defaultProps = {
    onAddNote: () => {}
  };

  static contextType = ApiContext;

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

  handleSubmit(event) {
    event.preventDefault();
    const { title, category_id, whereat, comments } = this.state;
    const note = {
      title: title,
      category_id: category_id,
      whereat: whereat,
      comments: comments
    };
    if (this.props.match.params.id) {
      note.user_id = this.props.match.params.id;
      note.suggesting_user_id = getUserId().user_id;
    }
    console.log(this.props);

    fetch(`${config.API_ENDPOINT}/notes`, {
      method: "POST",
      body: JSON.stringify(note),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${getAuthToken()}`
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
        console.log(data);
        this.setState({ routeToNoteList: true });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <div className="NoteCreate">
        {this.state.routeToNoteList && <Redirect to="/NoteList" />}
        <div className="CreateANote">
          <h1 className="formPageHeader">Create a note</h1>{" "}
          <p className="formDescriptionParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Id
            faucibus nisl tincidunt eget nullam.{" "}
          </p>
        </div>
        <form
          className="CreateNoteForm"
          onSubmit={event => this.handleSubmit(event)}
        >
          <div className="text">
            <div className="name">
              <Input
                placeholder="title"
                name="title"
                type="text"
                required
                id="CreateNoteForm-title"
                onChange={event => this.updateFormEntry(event)}
              ></Input>
            </div>
            <div className="category">
              <label htmlFor="category">category</label>
              <select
                id="category-select"
                name="category_id"
                value={this.state.category_id}
                onChange={event => this.updateFormEntry(event)}
              >
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
          <div className="where">
            <Input
              placeholder="where can you find it?"
              name="whereat"
              type="text"
              id="CreateNoteForm-where"
              onChange={event => this.updateFormEntry(event)}
            ></Input>
          </div>
          <div className="comments">
            <Textarea
              placeholder="anything to add?"
              name="comments"
              type="text"
              id="CreateNoteForm-comments"
              onChange={event => this.updateFormEntry(event)}
            ></Textarea>
          </div>
          <button type="submit" className="button">
            save note
          </button>
        </form>
      </div>
    );
  }
}
