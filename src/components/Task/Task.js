import './Task.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Task extends Component {
  state = {
    label: this.props.label,
  }

  handleKeyDown = (event) => {
    const { finishEditing } = this.props
    if (event.key === 'Enter') {
      const newLabel = event.target.value
      this.setState(() => {
        return {
          label: newLabel,
        }
      })
      finishEditing(event.target.value)
    }
  }

  handleChange = (event) => {
    const newLabel = event.target.value
    this.setState({
      label: newLabel,
    })
  }

  render() {
    const { label, date, done, edit, onDeleted, onToggleDone, editing } = this.props

    let TaskClassName = 'view'
    if (done) {
      TaskClassName = 'completed'
    } else if (edit) {
      TaskClassName = 'editing'
    }
    return (
      <li className={TaskClassName}>
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onToggleDone} />
          <label>
            <span className="description">{label}</span>
            <span className="created">{date}</span>
          </label>
          <button className="icon icon-edit" onClick={editing}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <input
          type="text"
          className="edit"
          value={this.state.label}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </li>
    )
  }
}

Task.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    done: PropTypes.bool,
    edit: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
  }),
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  editing: PropTypes.func.isRequired,
}

Task.defaultProps = {
  todo: {},
}
