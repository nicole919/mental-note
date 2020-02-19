import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../../lib/auth";
import "./Homepage.css";

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <h1 className="homePageHeader">Mental Note</h1>
        <div className="sectionContainer">
          <section className="HomePageSection1">
            <h2>Can't keep up with all the things?</h2>
            <p>
              Mental Note will help you organize the things want to get to but
              aren't quite ready for yet.
            </p>
          </section>
          <section className="HomePageSection2">
            <h2>Create your own categories</h2>
            <p>
              Are you tired of filling your bookmarks page with recipe links?
              Have about 50 shows you wanna watch? Add them to your Mental
              Notes.
            </p>
          </section>
          <section className="HomePageSection3">
            <h2>Everything is better with a friend!</h2>
            <p>
              Use Mental Note to suggest that cool band to your friend who you
              know will just *love* them. :)
            </p>
          </section>
        </div>
        <div class="Iam">
          <p>What do you want to add?</p>
          <b>
            <div class="innerIam">
              shows
              <br />
              movies
              <br />
              books
              <br />
              recipes
              <br />
              games <br />
            </div>
          </b>
        </div>

        {!isLoggedIn() && (
          <section className="LoginLogout">
            <Link to="/RegistrationForm">Sign Up</Link>{" "}
            <Link to="LoginForm"> Login</Link>
          </section>
        )}
        {isLoggedIn() && (
          <section className="LoginLogout">
            <Link to="Logout">Logout</Link>
          </section>
        )}
      </div>
    );
  }
}
