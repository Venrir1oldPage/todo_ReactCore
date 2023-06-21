import './Task.css'
import PropTypes from 'prop-types'

import Timer from '../Timer/Timer'
import CreatingTime from '../CreatingTime/CreatingTime'

const Task = (props) => {
  const {play, min, sec, timerId,  label, done, edit, date, onDeleted, onToggleDone, id, 
    editing, finishEditing} = props

  const handleKeyDown = ({key, target}) => {
    if (key === 'Enter') {
      if (!/[^\s]/.test(target.value)) return
      finishEditing(target.value)
    }}

  const toggleDone = ({target}) => { 
    target.checked =  !target.checked
    onToggleDone()
  }

  let TaskClassName = 'view'
  if (done) {
    TaskClassName = 'completed'
  } else if (edit) {
    TaskClassName = 'editing' }

  return (
    <li className={TaskClassName}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={done} onChange={toggleDone}/>
        <label>
          <span className="title">{label}</span>
          <Timer min={min} sec={sec} play={play} id={id} timerId={timerId}/>
          <CreatingTime date={date}/>
        </label>
        <button className="icon icon-edit" onClick={editing}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      <input
        type="text"
        className="edit"
        onKeyDown={handleKeyDown}
        defaultValue={label}
      />
    </li>
  )  
}


Task.propTypes = {
  play: PropTypes.bool,
  min:PropTypes.number,
  sec:PropTypes.number,
  label: PropTypes.string,
  done: PropTypes.bool,
  edit: PropTypes.bool,
  date: PropTypes.instanceOf(Date),
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  editing: PropTypes.func.isRequired,
  finishEditing: PropTypes.func.isRequired,
}

Task.defaultProps = {
  todo: {}
}

export default Task