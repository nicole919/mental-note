import React, { Component } from "react";
import config from "../../config";
import { getAuthToken } from "../../lib/auth";
import { Link } from "react-router-dom";

const FeedNote = props => {
  if (props.note.suggesting_user_id) {
    return (
      <p>
        {props.note.suggesting_user_name} suggested
        {props.note.title} to {props.note.category_name} for{" "}
        {props.note.user_name}
      </p>
    );
  } else {
    return (
      <p>
        {props.note.user_name} added {props.note.title} to{" "}
        {props.note.category_name}
      </p>
    );
  }
};

export default class Feed extends Component {
  state = {
    notes: []
  };

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

  render() {
    return (
      <div>
        {this.state.notes.map(note => {
          return <FeedNote note={note} />;
        })}
      </div>
    );
  }
}
