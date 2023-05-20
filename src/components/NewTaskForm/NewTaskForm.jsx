import './NewTaskForm.css'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'

export default class NewTaskForm extends Component {
  state = {
    label: ''
  }

  onInputChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSending = ({key}) => {
    const { addTask } = this.props
    if (key === 'Enter') {
      if (!/[^\s]/.test(this.state.label)) return
      let el = this.createEl(this.state.label)
      addTask(el)
      this.setState({
        label: ''
      })
    }
  }

  createEl(label) {
    let time = formatDistanceToNow(new Date(), {
      includeSeconds: true,
      addSuffix: true
    })
    return {
      startDate: new Date(),
      label: label,
      id: uuidv4(),
      date: time,
      done: false,
      edit: false
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
