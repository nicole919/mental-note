import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NoteList.css";

export default class NoteList extends Component {
  render() {
    return (
      <div className="NoteList">
        <h1>mental notes</h1>
        <Link to="/CreateNote">New note</Link>| |
        <Link to="/CreateList">New Category</Link>
        <div class="categories">
          <p>movies</p>
          <p>books</p>
          <p>recipes</p>
        </div>
        <div class="lists">
          <section>
            <header>
              <h2>movie</h2>
            </header>
            <p>sweet movie title</p>
            <button>Edit</button>
            <button>Delete</button>
          </section>
          <section>
            <header>
              <h2>book title</h2>
            </header>
            <p>interesting book title</p>
            <p>
              <a href="linktobuybook.com">amazon link</a>
            </p>
            <p>some note you wanted to add</p>
            <button>Edit</button>
            <button>Delete</button>
          </section>
          <section>
            <header>
              <h2>yummy recipe</h2>
            </header>
            <p>delicious food</p>
            <p>
              <a href="recipewebsite">website</a>
            </p>
            <button>Edit</button>
            <button>Delete</button>
          </section>
          <section>
            <header>
              <h2>movie</h2>
            </header>
            <p>sweet movie title</p>
            <p>watch on platform</p>
            <button>Edit</button>
            <button>Delete</button>
          </section>
          <section>
            <header>
              <h2>book title</h2>
            </header>
            <p>interesting book title</p>
            <p>some note you wanted to add</p>
            <button>Edit</button>
            <button>Delete</button>
          </section>
          <section>
            <header>
              <h2>yummy recipe</h2>
            </header>
            <p>delicious food</p>
            <p>
              <a href="recipewebsite">website</a>
            </p>
            <p>note about recipe</p>
            <button>Edit</button>
            <button>Delete</button>
          </section>
        </div>
      </div>
    );
  }
}
