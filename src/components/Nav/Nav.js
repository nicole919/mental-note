import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <nav>
          <span className="NavLink">
            {/* {" "}
            <Link to="/">Home</Link>
          </span>
          <span className="NavLink">
            {" "}
            <Link to="/NewAteItemForm">New Entry</Link>
          </span>
          <span className="NavLink">
            {" "}
            <Link to="/AteList">Entries</Link> */}
          </span>
        </nav>
      </>
    );
  }
}
