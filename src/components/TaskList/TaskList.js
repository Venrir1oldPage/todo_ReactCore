import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({
  todos,
  onDeleted,
  onToggleDone,
  editing,
  finishEditing,
}) => {
  const tasks = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <Task
        {...itemProps}
        key={id}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        editing={() => editing(id)}
        finishEditing={(v) => finishEditing(id, v)}
      />
    );
  });
  return <ul className="todo-list">{tasks}</ul>;
};

export default TaskList;
