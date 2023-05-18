import './NewTaskForm.css'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  state = {
    label: ''
  }

  onInputChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSending = (e) => {
    const { addTask } = this.props
    if (e.key === 'Enter') {
      addTask(this.state.label)
      this.setState({
        label: ''
      })
    }
  }

  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={this.onInputChange}
        autoFocus
        onKeyDown={this.onSending}
        value={this.state.label}
      />
    )
  }
}

NewTaskForm.defaultProps = {
  placeholder: 'What needs to be done?'
}

NewTaskForm.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  addTask: PropTypes.func.isRequired
}
