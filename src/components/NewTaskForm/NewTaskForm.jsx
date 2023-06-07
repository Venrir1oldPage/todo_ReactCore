import './NewTaskForm.css'
import { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'

export default class NewTaskForm extends Component {
  state = {
    label: '',
    min:'',
    sec:'',
  }

  onSending = ({key}) => {
    const { addTask } = this.props
    if (key === 'Enter') {
      if (!/[^\s]/.test(this.state.label)) return
      let el = this.createEl(this.state.label, this.state.min, this.state.sec)
      addTask(el)
      this.setState({
        label: '',
        min:'',
        sec:'',
      })
      document.getElementById('label').focus()
    }
  }

  onInputChange = (e) => {
    let key= e.target.id
    this.setState({
      [key]: e.target.value
    })
  }

  runNext = ({key, target}) => {
    if (key === 'Enter') {
      target.nextSibling.focus()
    }
  }

  createEl(label, min, sec) {
    min=min?+min:0
    sec=sec?+sec:0
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
      edit: false,
      min:min,
      sec:sec
    }
  }

  render() {
    return (
      <form className="new-todo-form">
        <input
          id='label'
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onInputChange}
          autoFocus
          onKeyDown={this.runNext}
          value={this.state.label}
        />
        <input  id='min' className="new-todo-form__timer"  onChange={this.onInputChange} type='number'
          value={this.state.min} placeholder="Min" onKeyDown={this.runNext}/>
        <input  id='sec' className="new-todo-form__timer"  onChange={this.onInputChange} type='number'
          value={this.state.sec} placeholder="Sec" onKeyDown= {this.onSending}/>
      </form>
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
