import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Note from "./Note";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <Router>
    (<Note />, div)
  </Router>;
  ReactDOM.unmountComponentAtNode(div);
});
