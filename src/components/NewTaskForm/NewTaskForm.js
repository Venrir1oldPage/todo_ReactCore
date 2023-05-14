import "./NewTaskForm.css";
import React, { Component } from "react";

export default class NewTaskForm extends Component {
  state = {
    value: "",
  };

  handleKeyDown = (event) => {
    const { addTask } = this.props;
    if (event.key === "Enter") {
      addTask();
    }
  };

  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={this.handleKeyDown}
        onChange={(event) => this.setState({ value: event.target.value })}
        value={this.state.value}
      />
    );
  }
}
