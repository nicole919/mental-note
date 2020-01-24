import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Feed extends Component {
  render() {
    return (
      <div>
        <h1>Users Mental Note Feed</h1>
        <div className="feed">
          <p>
            <Link to="/profile">user</Link> added "fairy tale" to "shows"
          </p>
          <p>
            <Link to="/profile">user</Link> added "some indie shit" to "music"
          </p>
          <p>
            <Link to="/profile">user</Link> suggested "mickey mouse" to "shows"
            for <Link to="/profile">a different user</Link>
          </p>
          <p>
            <Link to="/profile">a different user</Link> added "sad emo" to
            "music"
          </p>
        </div>
      </div>
    );
  }
}
