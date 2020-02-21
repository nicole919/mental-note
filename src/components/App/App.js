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
import Logout from "../Logout/Logout";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <Route
          render={({ location }) => (
            <main>
              <Switch location={location}>
                <Route exact path="/" component={Homepage} />
                <Route path="/registrationform" component={RegistrationForm} />
                <Route path="/loginform" component={LoginForm} />
                <Route
                  path={["/notelist/category/:categoryId", "/notelist"]}
                  component={NoteList}
                />
                <Route
                  path={["/createnote/:id", "/createnote"]}
                  component={CreateNote}
                />
                <Route path="/createlist" component={CreateList} />
                <Route path="/user/:id" component={Profile} />
                <Route path="/feed" component={Feed} />
                <Route path="/logout" component={Logout} />
              </Switch>
            </main>
          )}
        />{" "}
      </div>
    );
  }
}
