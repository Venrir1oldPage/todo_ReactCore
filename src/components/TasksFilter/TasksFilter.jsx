import './TaskFilter.css'
import PropTypes from 'prop-types'

const TasksFilter = ({ onChangeFilter, filterSelected,  filterName }) => {
  return (
    <li>
      <button
        onClick={() => onChangeFilter(filterName)}
        className={filterSelected === filterName ? 'selected' : null}>
        {filterName}
      </button>
    </li>
  )
}

TasksFilter.propTypes = {
  filterSelected: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
  filterName: PropTypes.string
}

export default TasksFilter

