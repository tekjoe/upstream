import React, { Component } from "react";
import { connect } from "react-redux";
import { startAddProfile } from "../actions/auth";

class SettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: "",
      twitchUsername: "",
      twitterUsername: ""
    };
  }

  handleClick = e => {
    const updates = this.state;
    this.props.startAddProfile(updates);
    this.props.history.push("/profile");
    e.preventDefault();
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { about, twitterUsername, twitchUsername } = this.state;
    return (
      <div>
        <section className="hero is-primary is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Settings</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Edit Profile</h1>
            </div>

            <div className="field">
              <label className="label">About</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="A brief introduction about yourself"
                  value={about}
                  onChange={this.onChange}
                  name="about"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Twitch</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Twitch Username"
                  name="twitchUsername"
                  value={twitchUsername}
                  onChange={this.onChange}
                />
                <span className="icon is-small is-left">
                  <i className="fab fa-twitch" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Twitter</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  type="text"
                  placeholder="Twitter Username"
                  name="twitterUsername"
                  value={twitterUsername}
                  onChange={this.onChange}
                />
                <span className="icon is-small is-left">
                  <i className="fab fa-twitter" />
                </span>
              </div>
            </div>
            <button className="button is-success" onClick={this.handleClick}>
              Update
            </button>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = { startAddProfile };

export default connect(
  undefined,
  mapDispatchToProps
)(SettingsPage);
