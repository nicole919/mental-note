import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CreateNote from "./CreateNote";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <Router>
    (<CreateNote />, div)
  </Router>;
  ReactDOM.unmountComponentAtNode(div);
});
