import React, { Component } from "react";
import { isLoggedIn } from "../lib/auth";
export const AuthContext = React.createContext({});

export default class AuthProvider extends Component {
  state = {
    loggedIn: isLoggedIn(),
    setLoggedIn: newValue => {
      this.setState({ loggedIn: newValue });
    }
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
