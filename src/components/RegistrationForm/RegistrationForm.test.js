import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <Router>
    (<RegistrationForm />, div)
  </Router>;
  ReactDOM.unmountComponentAtNode(div);
});
