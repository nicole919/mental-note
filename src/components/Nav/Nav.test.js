import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <Router>
    (<Nav />, div)
  </Router>;
  ReactDOM.unmountComponentAtNode(div);
});
