import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import NoteList from "../NoteList/NoteList";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
import CreateNote from "../CreateNote/CreateNote";
import CreateList from "../CreateList/CreateList";
import Profile from "../Profile/Profile";
import Feed from "../Feed/Feed";
import Nav from "../Nav/Nav";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>

        <main>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/registrationform" component={RegistrationForm} />
            <Route path="/loginform" component={LoginForm} />
            <Route path="/notelist" component={NoteList} />
            <Route path="/createnote" component={CreateNote} />
            <Route path="/createlist" component={CreateList} />
            <Route path="/profile" component={Profile} />
            <Route path="/feed" component={Feed} />
          </Switch>
        </main>
      </div>
    );
  }
}
