import PropTypes from 'prop-types'

import './TaskList.css'
import Task from '../Task/Task'

const TaskList = ({ todos, onDeleted, onToggleDone, editing, finishEditing, holdTimer}) => {
  const tasks = todos.map((item) => {
    const { id, ...itemProps } = item
    return (
      <Task
        {...itemProps}
        key={id}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        editing={() => editing(id)}
        finishEditing={(v) => finishEditing(id, v)}
        holdTimer={({min,sec,play})=>holdTimer(id,min,sec,play)}
      />
    )
  })
  return <ul className="todo-list">{tasks}</ul>
}

TaskList.defaultProps = {
  todos: []
}

TaskList.propTypes = {
  todos: PropTypes.array,
  onToggleDone: PropTypes.func.isRequired,
  editing: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
  finishEditing: PropTypes.func.isRequired,
  holdTimer: PropTypes.func.isRequired
}

export default TaskList