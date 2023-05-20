import { Component } from 'react'

import Footer from '../Footer/Footer'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'

import './App.css'

export default class App extends Component {
  state = {
    todoData: [],
    filter: 'All',
    todoFiltered: []
  }

  addTask = (el) => {
    this.setState(({ todoData }) => {
      const newTodoData =[...todoData, el]
      return {
        todoData: newTodoData
      }
    })
  }

  deleteTask = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((el) => el.id !== id)
      return {
        todoData: newTodoData
      }
    })
  }

  changeSetting = (id, setting, value = false) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.map((el) => {
        if (el.id === id) {
          el[setting] = !el[setting]
          if(value)  el.label = value
        }
        return el
      })
      return {
        todoData: newTodoData
      }
    })
  }

  onToggleDone = (id) => {
    this.changeSetting(id, 'done')
  }

  editing = (id) => {
    this.changeSetting(id, 'edit')
  }

  finishEditing = (id, value) => {
    this.changeSetting(id, 'edit', value)
  }

  changeFilter = (value) => {
    this.setState({ filter: value })
  }

  deleteCompleted = () => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((el) => !el.done)
      return {
        todoData: newTodoData
      }
    })
  }

  render() {
    const { todoData, filter } = this.state
    const counterLeft = todoData.length - todoData.filter((el) => el.done).length
    let todoItemsShown

    switch (filter) {
    case 'Completed':
      todoItemsShown = todoData.filter((elem) => elem.done)
      break
    case 'Active':
      todoItemsShown = todoData.filter((elem) => !elem.done)
      break
    default:
      todoItemsShown = todoData
    }

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm addTask={this.addTask} />
        </header>
        <section className="main">
          <TaskList
            todos={todoItemsShown}
            onDeleted={(id) => this.deleteTask(id)}
            onToggleDone={this.onToggleDone}
            editing={this.editing}
            finishEditing={this.finishEditing}
          />
          <Footer
            counterLeft={counterLeft}
            onClear={this.deleteCompleted}
            onChangeFilter={this.changeFilter}
            filterSelected={this.state.filter}
          />
        </section>
      </section>
    )
  }
}
