import React, { Fragment } from "react";
import { connect } from "react-redux";
import BlogList from "./BlogList";

const ProfilePage = ({ username, profile }) => {
  return (
    <Fragment>
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{`${username}'s Profile`}</h1>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="box">
                <figure className="image">
                  <img src="/images/tekjoe.jpeg" alt={`${username}`} />
                </figure>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <div className="content">
                  {profile ? (
                    <div>
                      <h3>About Me</h3>
                      <p>{profile.about}</p>
                      <h4>Twitch Username</h4>
                      <p>{profile.twitchUsername}</p>
                      <h4>Twitter Username</h4>
                      <p>{profile.twitterUsername}</p>
                    </div>
                  ) : (
                    <p>No Profile Yet</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <BlogList />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    profile: state.auth.profile
  };
};

export default connect(mapStateToProps)(ProfilePage);
