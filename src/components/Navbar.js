import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import SearchForm from "./SearchForm";
import DropDownMenu from "./DropDownMenu";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };
  render() {
    const { isAuthenticated, startLogout } = this.props;
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            UpStream
          </Link>

          <a
            role="button"
            className={
              this.state.isActive
                ? "navbar-burger burger is-active"
                : "navbar-burger burger"
            }
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
            onClick={this.handleClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          id="navbar"
          className={
            this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className="navbar-start">
            <div className="navbar-item">
              <DropDownMenu />
            </div>

            {isAuthenticated ? (
              <Link className="navbar-item" to="/add-post">
                Add Post
              </Link>
            ) : null}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <SearchForm />
            </div>
            <div className="navbar-item">
              <div className="buttons">
                {isAuthenticated ? (
                  <button className="button is-danger" onClick={startLogout}>
                    Log out
                  </button>
                ) : (
                  <Fragment>
                    <Link className="button is-primary" to="/sign-up">
                      <strong>Sign up</strong>
                    </Link>
                    <Link to="/login" className="button is-light">
                      Log in
                    </Link>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.uid
  };
};

const mapDispatchToProps = { startLogout };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
