import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <span className="NavLink">
            {" "}
            <Link to="/">Home </Link>-
          </span>
          <span className="NavLink">
            {" "}
            <Link to="/NoteList">Notes</Link>-
          </span>
          <span className="NavLink">
            {" "}
            <Link to="/Feed">Feed</Link>
          </span>
        </nav>
      </>
    );
  }
}
