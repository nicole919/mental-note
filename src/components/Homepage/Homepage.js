import React, { Component } from "react";
import Heart from "../../heart.svg";
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
              know will just love them.
            </p>
          </section>
        </div>
        <div className="Iam">
          <p>What do you want to add?</p>
          <b>
            <div className="innerIam">
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

        <footer>
          <p> Mental Note is currently in beta mode</p>
          <p>
            If you do not wish to create a login for Mental Note but want to see
            how it works, login with username: testuser1 password: 1234abcd
          </p>
          <p>
            Created with <img className="heart" src={Heart} alt="heart" /> by{" "}
            <a href="https://nicole-portfolio.now.sh/">Nicole</a>
          </p>
        </footer>
      </div>
    );
  }
}
