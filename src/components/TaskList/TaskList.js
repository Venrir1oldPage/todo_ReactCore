import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ todos, onDeleted }) => {
  const tasks = todos.map((item) => {
    const { id, ...itemProps } = item;
    return <Task {...itemProps} key={id} onDeleted={() => onDeleted(id)} />;
  });
  return <ul className="todo-list">{tasks}</ul>;
};

export default TaskList;
