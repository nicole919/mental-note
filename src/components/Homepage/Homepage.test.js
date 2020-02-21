import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Homepage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  <Router>
    (<Homepage />, div)
  </Router>;
  ReactDOM.unmountComponentAtNode(div);
});
