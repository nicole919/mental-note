import React, { Component } from "react";
import config from "../../config";
import { getAuthToken } from "../../lib/auth";
import { Link } from "react-router-dom";
import "./Feed.css";

const FeedNote = props => {
  if (props.note.suggesting_user_id) {
    return (
      <div className="feedBox">
        <p className="feedInfo">
          <Link
            className="linkName"
            to={`/user/${props.note.suggesting_user_id}`}
          >
            {props.note.suggesting_user_name}
          </Link>{" "}
          suggested {props.note.title} to {props.note.category_name} for{" "}
          <Link className="linkToName" to={`/user/${props.note.user_id}`}>
            {props.note.user_name}
          </Link>
        </p>
      </div>
    );
  } else {
    return (
      <div className="feedBox">
        <p className="feedInfo">
          <Link className="linkOneUser" to={`/user/${props.note.user_id}`}>
            {props.note.user_name}
          </Link>{" "}
          added {props.note.title} to {props.note.category_name}
        </p>
      </div>
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
        this.setState({ notes: data });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <div className="Feed">
        {" "}
        <div className="FeedGrid">
          {this.state.notes.map(note => {
            return <FeedNote note={note} />;
          })}
        </div>
        <div className="FeedGrid2">
          <h1 className>Mental Note Feed</h1>{" "}
          <p className="formDescriptionParagraph">
            See what everyone else is adding to their lists. If you want to
            suggest something to someone else, simply click on the user to see
            their profile and add your personalized suggestion.{" "}
          </p>
        </div>
      </div>
    );
  }
}
