import React from "react";
import { connect } from "react-redux";
import CardGrid from "./CardGrid";

const HomePage = ({ isAuthenticated }) => {
  return (
    <div>
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Welcome to UpStream.</h1>
            {isAuthenticated ? (
              <h2 className="subtitle">Welcome back, user.</h2>
            ) : null}
          </div>
        </div>
      </section>
      <CardGrid />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.uid
  };
};

export default connect(mapStateToProps)(HomePage);
