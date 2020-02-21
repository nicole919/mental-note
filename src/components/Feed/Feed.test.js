import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Feed from "./Feed";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <Router>
    (<Feed />, div)
  </Router>;
  ReactDOM.unmountComponentAtNode(div);
});
