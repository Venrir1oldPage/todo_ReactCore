import "./TaskFilter.css";
import React from "react";

const TasksFilter = ({ onChangeFilter, filter }) => {
  return (
    <ul className="filters">
      <li>
        <button
          onClick={() => onChangeFilter("All")}
          className={filter === "All" ? "selected" : null}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => onChangeFilter("Active")}
          className={filter === "Active" ? "selected" : null}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={function () {
            onChangeFilter("Completed");
          }}
          className={filter === "Completed" ? "selected" : null}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TasksFilter;
