import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/*nav*/}
        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
        </main>
      </div>
    );
  }
}
