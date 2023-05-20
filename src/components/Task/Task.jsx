import './Task.css'
import PropTypes from 'prop-types'

const Task = ({ label, date, done, edit, onDeleted, finishEditing, onToggleDone, editing }) => {

  const handleKeyDown = ({key, target}) => {
    if (key === 'Enter') {
      finishEditing(target.value)
    }
  }

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
          <span className="description">{label}</span>
          <span className="created">{date}</span>
        </label>
        <button className="icon icon-edit" onClick={editing}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      <input
        type="text"
        id = "inputEdit"
        className="edit"
        onKeyDown={handleKeyDown}
        defaultValue={label}
      />
    </li>
  )
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


export default Task 