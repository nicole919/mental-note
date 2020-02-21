import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Profile from "./Profile";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <Router>
    (<Profile />, div)
  </Router>;
  ReactDOM.unmountComponentAtNode(div);
});
