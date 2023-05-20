import './TaskFilter.css'

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

export default TasksFilter
