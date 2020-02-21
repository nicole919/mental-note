import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CreateList from "./CreateList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <Router>
    (<CreateList />, div)
  </Router>;
  ReactDOM.unmountComponentAtNode(div);
});
