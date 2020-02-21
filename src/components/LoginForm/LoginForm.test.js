import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LoginForm from "./LoginForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <Router>
    (<LoginForm />, div)
  </Router>;
  ReactDOM.unmountComponentAtNode(div);
});
