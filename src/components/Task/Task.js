import "./Task.css";
import { formatDistanceToNow } from "date-fns";
import React, { Component } from "react";

export default class Task extends Component {
  state = {
    done: false,
    edit: false,
  };

  onCheckboxClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };

  onEdit = () => {
    if (!this.state.edit) {
      this.setState({
        edit: true,
      });
    }
  };

  finishEditing = () => {
    if (this.state.edit) {
      this.setState({
        edit: false,
      });
    }
  };
  s;

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.label = event.target.value;
      this.finishEditing();
    }
  };

  handleChange = (event) => {
    this.label = event.target.value;
  };

  render() {
    const { label, date, onDeleted } = this.props;
    const { done, edit } = this.state;
    const time = formatDistanceToNow(date, { addSuffix: true });

    let TaskClassName = "view";
    if (done) {
      TaskClassName = "completed";
    } else if (edit) {
      TaskClassName = "editing";
    }

    return (
      <li className={TaskClassName}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={this.onCheckboxClick}
          />
          <label>
            <span className="description">{label}</span>
            <span className="created">{time}</span>
          </label>
          <button className="icon icon-edit" onClick={this.onEdit}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <input
          type="text"
          className="edit"
          value={label}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </li>
    );
  }
}
