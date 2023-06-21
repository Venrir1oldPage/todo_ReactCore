import PropTypes from 'prop-types'

import TasksFilter from '../TasksFilter/TasksFilter'
import './Footer.css'

const Footer = ({ counterLeft, onClear, onChangeFilter, filter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{counterLeft} item left</span>
      <ul className="filters">
        <TasksFilter onChangeFilter={onChangeFilter} filterSelected={filter} filterName = "All"/>
        <TasksFilter onChangeFilter={onChangeFilter} filterSelected={filter} filterName = "Active"/>
        <TasksFilter onChangeFilter={onChangeFilter} filterSelected={filter} filterName = "Completed"/>
      </ul>
      <button className="clear-completed" onClick={() => onClear()}>
        Clear completed
      </button>
    </footer>
  )
}
Footer.defaultProps = {
  lcounterLeft: 0,
  filter: 'All'
}

Footer.propTypes = {
  counterLeft: PropTypes.number,
  onClear: PropTypes.func.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string
}

export default Footer

