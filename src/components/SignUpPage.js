import React, { Component } from "react";
import { startCreateUser } from "../actions/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      passwordOne: "",
      passwordTwo: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const { email, passwordOne, username } = this.state;
    this.props.startCreateUser(email, passwordOne, username);
    e.preventDefault();
    setTimeout(() => {
      if (!this.props.error) {
        this.props.history.push("/");
      }
    }, 2000);
  };

  render() {
    const { email, passwordOne, passwordTwo, username } = this.state;
    const { error } = this.props;
    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === "" || email === "";
    return (
      <section className="hero is-grey is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Sign Up</h3>
              <p className="subtitle has-text-grey">
                Please enter your information
              </p>
              {error && <p>{error.message}</p>}
              <div className="box">
                <form onSubmit={this.onSubmit}>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.onChange}
                        placeholder="Username"
                        autoFocus=""
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        placeholder="Email"
                        autoFocus=""
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>

                  <button
                    disabled={isInvalid}
                    className="button is-block is-info is-large is-fullwidth"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
              <p className="has-text-grey">
                Already a member?
                <br />
                <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = { startCreateUser };

const mapStateToProps = state => ({
  error: state.auth.error
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
