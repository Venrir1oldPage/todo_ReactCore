import TasksFilter from "../TasksFilter/TasksFilter";
import "./Footer.css";

const Footer = ({ counterLeft, onClear, onChangeFilter, filter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{counterLeft} item left</span>
      <TasksFilter onChangeFilter={onChangeFilter} filter={filter} />
      <button className="clear-completed" onClick={() => onClear()}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
