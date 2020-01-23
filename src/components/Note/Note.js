import React from "react";
import { Link } from "react-router-dom";
import "./Note.css";

export default function Note(props) {
  return (
    <div className="Note">
      <h2 className="Note-title">
        <Link to={`mental-note/note/${props.id}`}>{props.name}</Link>
      </h2>
      <button className="Note-delete" type="button">
        remove
      </button>
    </div>
  );
}
