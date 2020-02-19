import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../config";
import "./Profile.css";

export default class Profile extends Component {
  state = {
    user: null
  };
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/users/${this.props.match.params.id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(async res => {
        if (!res.ok) {
          const err = await res.json();
          console.log(`Error is: ${err}`);
          throw err;
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ user: data });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    console.log(this.props);
    if (!this.state.user) {
      return <div>loading...????</div>;
    }
    return (
      <div className="Profile">
        <div className="ProfilePicture">
          <img
            className="Profile-Img"
            alt="avatar"
            src="https://picsum.photos/200
            "
          />
          <div className="ProfileInfo">
            {" "}
            <h1>{this.state.user.user_name}'s profile</h1>
            <p>Interests: {this.state.user.interests}</p>
            <Link to={`/createnote/${this.props.match.params.id}`}>
              Suggest something to user
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
