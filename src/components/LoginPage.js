import React, { Component } from "react";
import { startLogin } from "../actions/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    const { email, password } = this.state;
    this.props.startLogin(email, password);
    this.props.history.push("/");
    e.preventDefault();
  };
  render() {
    const { email, password } = this.state;
    const isInvalid = password === "" || email === "";
    return (
      <section className="hero is-grey is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <form onSubmit={this.onSubmit}>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        placeholder="Your Email"
                        autoFocus=""
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-large"
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        placeholder="Your Password"
                      />
                    </div>
                  </div>

                  <button
                    disabled={isInvalid}
                    className="button is-block is-info is-large is-fullwidth"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
              <p className="has-text-grey">
                Not a member yet? <br />
                <Link to="/sign-up">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = { startLogin };

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
