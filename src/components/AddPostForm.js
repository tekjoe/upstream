import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startAddBlog } from "../actions/blog";

class AddPostForm extends Component {
  state = {
    title: "",
    content: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.startAddBlog(this.state);
    this.props.history.push("/home");
  };
  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Title..."
              onChange={this.onChange}
              name="title"
              value={this.state.title}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Content</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Blog..."
              onChange={this.onChange}
              name="content"
              value={this.state.content}
            />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-danger">
              <Link to="/home" className="has-text-white">
                Cancel
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { startAddBlog };

export default connect(
  undefined,
  mapDispatchToProps
)(AddPostForm);
