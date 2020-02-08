import React, { Component } from "react";
import config from "../../config";

export default class Note extends Component {
  handleClickDelete(note_id) {
    fetch(config.API_ENDPOINT + `/notes/${note_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(() => {
        this.props.onDelete(note_id);
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderWhereAt() {
    if (!this.props.whereat) {
      return null;
    } else {
      return <p> where can you find it? {this.props.whereat}</p>;
    }
  }
  renderComments() {
    if (!this.props.comments) {
      return null;
    } else {
      return <p> extra comments: {this.props.comments}</p>;
    }
  }
  renderSuggestingUserId() {
    if (!this.props.suggesting_user_id) {
      return null;
    } else {
      return <p> Recommended by {this.props.suggesting_user_id}</p>;
    }
  }

  render() {
    return (
      <div className="Note-Container">
        <section className="Note">
          {this.props.title && <h2>{this.props.title}</h2>}{" "}
          {this.renderWhereAt()}
          {this.renderComments()}
          <p>{this.renderSuggestingUserId}</p>
          <div>
            <button
              className="Note-delete"
              type="button"
              onClick={() => this.handleClickDelete(this.props.id)}
            >
              delete
            </button>
          </div>
        </section>
        <footer></footer>
      </div>
    );
  }
}
