import './Task.css'
import PropTypes from 'prop-types'
import { Component } from 'react'

import Timer from '../Timer/Timer'

export default class Task extends Component { 

  state={
    play:this.props.play||false,
    min:this.props.min,
    sec:this.props.sec
  }

  holdTimer = (state) => {
    this.props.holdTimer(state)
  }

  handleKeyDown = ({key, target}) => {
    if (key === 'Enter') {this.props.finishEditing(target.value)}}

  toggleDone = ({target}) => { 
    target.checked =  !target.checked
    this.props.onToggleDone()
  }

  render () {
    console.log(this.props)
    const { label, date, done, edit, onDeleted, editing } = this.props
    
    let TaskClassName = 'view'
    if (done) {
      TaskClassName = 'completed'
    } else if (edit) {
      TaskClassName = 'editing' }

    const {play,sec,min} = this.state
    return (
      <li className={TaskClassName}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={done} onChange={this.toggleDone}/>
          <label>
            <span className="title">{label}</span>
            <Timer min={min} sec={sec} play={play} holdTimer={this.holdTimer}/>
            <span className="description">{date}</span>
          </label>
          <button className="icon icon-edit" onClick={editing}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <input
          type="text"
          id = "inputEdit"
          className="edit"
          onKeyDown={this.handleKeyDown}
          defaultValue={label}
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
    date: PropTypes.instanceOf(Date)
  }),
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  editing: PropTypes.func.isRequired
}

Task.defaultProps = {
  todo: {}
}