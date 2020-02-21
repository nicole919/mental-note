import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Logout from "./Logout";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <Router>
    (<Logout />, div)
  </Router>;
  ReactDOM.unmountComponentAtNode(div);
});
