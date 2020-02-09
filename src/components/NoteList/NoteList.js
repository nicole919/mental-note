import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      filteredNotes: [],
      loaded: false
    };
  }
  static defaultProps = {
    onDeleteNote: () => {}
  };

  static contextType = ApiContext;

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/notes`, {
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
        console.log(data);
        this.setState({ notes: data });
      })
      .catch(error => {
        this.setState({ error });
      });
  }
  onNoteDeleted = note_id => {
    const newNotes = this.state.notes.filter(note => {
      return note.note_id !== note_id;
    });
    this.setState({ notes: newNotes });
  };

  render() {
    return (
      <div className="NoteList">
        <h1>my notes</h1>
        <Link to="/CreateNote">New note</Link>| |
        <Link to="/CreateList">New Category</Link>
        <section class="lists">
          <ul>
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
    );
  }
}
