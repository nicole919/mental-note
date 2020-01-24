import React, { Component } from "react";
import { Textarea, Input } from "../Utils";
import { Link } from "react-router-dom";
import "./CreateNote.css";

export default class NewItemAteForm extends Component {
  render() {
    return (
      <div>
        <h1>add new note</h1>
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
            <div className="category">
              <label htmlFor="category">category</label>
              <select
                className="input"
                name="category"
                id="CreateNoteForm-category"
              >
                <option value="movie">movie</option>
                <option value="show" selected>
                  show
                </option>
                <option value="book">book</option>
                <option value="game">game</option>
              </select>
            </div>
          </div>
          <div className="when">
            <label htmlFor="CreateNoteForm-where">Where can you find it?</label>
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
        </form>
        <Link to="/NoteList">Create</Link>
        {/* <Button type="submit">Save</Button> */}
      </div>
    );
  }
}
