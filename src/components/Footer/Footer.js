import TasksFilter from '../TasksFilter/TasksFilter'

import './Footer.css'
// eslint-disable-next-line import/order
import PropTypes from 'prop-types'

const Footer = ({ counterLeft, onClear, onChangeFilter, filter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{counterLeft} item left</span>
      <TasksFilter onChangeFilter={onChangeFilter} filter={filter} />
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
