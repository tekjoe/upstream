import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todos";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
  }

  onChange = e => {
    this.setState({
      todo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ""
    });
  };

  render() {
    return (
      <form className="todo-list__form" id="todo-form">
        <input
          name="todo"
          placeholder="Add todo..."
          type="text"
          onChange={this.onChange}
          value={this.state.todo}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Add
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = { addTodo: addTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
