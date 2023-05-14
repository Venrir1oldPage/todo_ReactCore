import { Component } from "react";
import Footer from "../Footer/Footer";
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import "./App.css";

export default class App extends Component {
  newId = 100;
  state = {
    todoData: [
      {
        label: "Drink Coffee",
        id: 7,
        date: new Date(2014, 6, 2),
      },
      {
        label: "Make Awesome App",
        id: 6,
        date: new Date(2014, 6, 2),
      },
      {
        label: "Have a lunch",
        id: 44,
        date: new Date(2014, 6, 2),
      },
    ],
    counterDone: 5,
  };

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex((el) => el.id === id);
      const newTodoData = [...todoData];
      newTodoData.splice(indx, 1);
      return {
        todoData: newTodoData,
      };
    });
  };

  addTask = () => {
    this.setState(({ todoData }) => {
      const newTodoData = [...todoData];
      const newItem = { label: "new", id: this.newId++, date: new Date() };
      newTodoData.push(newItem);
      return {
        todoData: newTodoData,
      };
    });
  };

  render() {
    const { todoData, counterDone } = this.state;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addTask={this.addTask} />
        </header>
        <section className="main">
          <TaskList todos={todoData} onDeleted={(id) => this.deleteTask(id)} />
          <Footer done={counterDone} />
        </section>
      </section>
    );
  }
}
