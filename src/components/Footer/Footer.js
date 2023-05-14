import TasksFilter from "../TasksFilter/TasksFilter";
import "./Footer.css";

const Footer = ({ done }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{done} item left</span>
      <TasksFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
