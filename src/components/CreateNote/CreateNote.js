import React, { Component } from "react";
import { Textarea, Input } from "../Utils";
import { Link } from "react-router-dom";
import "./CreateNote.css";

export default class NewItemAteForm extends Component {
  render() {
    return (
      <div>
        <h1>add new category</h1>
        <form className="CreateNoteForm">
          <div className="text">
            <div className="name">
              <label htmlFor="CreateNoteForm-title">Title {/*required*/}</label>
              <Input
                name="title"
                type="text"
                //required
                id="CreateNoteForm-title"
              ></Input>
            </div>
            <div className="when">
              <label htmlFor="CreateNoteForm-where">
                Where can you find it?
              </label>
              <Input name="when" type="text" id="CreateNoteForm-where"></Input>
            </div>
            <div className="comments">
              <label htmlFor="CreateNoteForm-comments">Additional notes</label>
              <Textarea
                name="comments"
                type="text"
                id="CreateNoteForm-comments"
              ></Textarea>
            </div>
            <Link to="/NoteList">Create</Link>
            {/* <Button type="submit">Save</Button> */}
          </div>
        </form>
      </div>
    );
  }
}
