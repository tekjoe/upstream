import React, { Component } from "react";
import { startCreateUser } from "../actions/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passwordOne: "",
      passwordTwo: "",
      error: null || this.props.error
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const { email, passwordOne } = this.state;
    this.props.startCreateUser(email, passwordOne);
    this.props.history.push("/");
    e.preventDefault();
  };

  render() {
    const { email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === "" || email === "";
    return (
      <div className="wrapper">
        <div className="signup__container">
          <h1>Sign Up</h1>
          <form onSubmit={this.onSubmit} className="signup-form">
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
              className="text-input"
            />
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
              className="text-input"
            />
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
              className="text-input"
            />
            <button disabled={isInvalid} type="submit" className="button">
              Sign Up
            </button>
            {error && <p>{error.message}</p>}
          </form>
          <p>Already a member?</p>
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { startCreateUser };

export default connect(
  undefined,
  mapDispatchToProps
)(SignUpPage);
