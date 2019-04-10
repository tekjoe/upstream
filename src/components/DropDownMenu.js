import React, { Component } from "react";

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
            <a href="/" className="dropdown-item">
              Moba
            </a>
            <a className="dropdown-item">Game</a>
            <a href="/" className="dropdown-item">
              Battle Royale
            </a>
            <a href="/" className="dropdown-item">
              Game
            </a>
          </div>
        </div>
      </div>
    );
  }
}
