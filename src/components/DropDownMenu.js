import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DropDownMenu extends Component {
  state = {
    isActive: false
  };

  handleClick = e => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <div className={this.state.isActive ? "dropdown is-active" : "dropdown"}>
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            onClick={this.handleClick}
          >
            <span>Games</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <Link to="/games/moba" className="dropdown-item">
              Moba
            </Link>

            <Link to="/games/br" className="dropdown-item">
              Battle Royale
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
