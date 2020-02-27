import React, { Component } from "react";
import { NavLink, Link, Route } from "react-router-dom";
import Note from "../Note/Note";
import { getAuthToken } from "../../lib/auth";
import config from "../../config";
import ApiContext from "../../ApiContext";
import "./NoteList.css";

export default class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      categories: [],
      filteredNotes: [],
      loaded: false
    };
  }
  static defaultProps = {
    onDeleteNote: () => {}
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
    let URL = `${config.API_ENDPOINT}/notes?userOnly=true`;
    if (this.props.match.params.categoryId) {
      URL += `&category_id=${this.props.match.params.categoryId}`;
    }

    fetch(URL, {
      method: "GET",
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
        this.setState({ notes: data });
      })
      .catch(error => {
        this.setState({ error });
      });
    this.fetchCategories();
  }
  onNoteDeleted = note_id => {
    const newNotes = this.state.notes.filter(note => {
      return note.note_id !== note_id;
    });
    this.setState({ notes: newNotes });
  };

  render() {
    if (!this.props.isLoggedIn()) {
      return <h1 className="errorMessage">You need to see your note list.</h1>;
    }

    return (
      <div className="NoteList">
        <section className="topLinks">
          <Link to="/CreateNote">New note</Link>{" "}
          <Link to="/CreateList">New Category</Link>
        </section>
        <div className="NoteListGrid">
          <ul className="categoryHolder">
            <h2 className="categoryHeader" style={{ color: "white" }}>
              Categories
            </h2>

            {this.state.categories.map(category => (
              <li
                className="categoryItemContainer"
                key={category.category_id}
                value={category.category_id}
              >
                <NavLink
                  className="CategoryLink"
                  to={`/notelist/category/${category.category_id}`}
                >
                  {category.category_name}
                </NavLink>
              </li>
            ))}
          </ul>
          <section className="lists">
            <ul className="ListOfNotes">
              {this.state.notes.map(note => (
                <li className="listItemContainer" key={note.id}>
                  <Note
                    id={note.note_id}
                    title={note.title}
                    whereat={note.whereat}
                    comments={note.comments}
                    suggestingUser={note.suggestingUser}
                    onDelete={this.onNoteDeleted}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}
