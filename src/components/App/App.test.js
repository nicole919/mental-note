import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <Router>
    (<App />, div)
  </Router>;
  ReactDOM.unmountComponentAtNode(div);
});
