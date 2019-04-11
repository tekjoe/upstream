import React from "react";
import { connect } from "react-redux";
import CardGrid from "./CardGrid";

const HomePage = ({ isAuthenticated, username }) => {
  return (
    <div>
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Welcome to UpStream.</h1>
            {isAuthenticated ? (
              <h2 className="subtitle">Good to see you again, {username}.</h2>
            ) : (
              <h2 className="subtitle">
                Create a profile to start your journey.
              </h2>
            )}
          </div>
        </div>
      </section>
      <CardGrid />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.uid,
    username: state.auth.username
  };
};

export default connect(mapStateToProps)(HomePage);
