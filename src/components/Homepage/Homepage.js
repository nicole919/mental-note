import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <h1>Mental Note</h1>

        <section>
          <h1>Can't keep up with all the things?</h1>
          <p>
            Mental Note will help you organize the things want to get to but
            aren't quite ready for yet.
          </p>
        </section>
        <section>
          <h1>Create your own categories</h1>
          <p>
            Are you tired of filling your bookmarks page with recipe links? Have
            about 50 shows you wanna watch? Add them to your Mental Notes.
          </p>
        </section>
        <section>
          <h1>Everything is better with a friend!</h1>
          <p>
            Use Mental Note to suggest that cool band to your friend who you
            know will just *love* them. :)
          </p>
        </section>
        <section>
          <Link to="/RegistrationForm">Sign Up</Link>| |
          <Link to="LoginForm">Login</Link>
        </section>
      </div>
    );
  }
}
