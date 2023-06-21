import {  useState } from 'react'

import MyContext from '../MyContext/MyContext'
import Footer from '../Footer/Footer'
import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'

import './App.css'

const App = () => {

  const [todoData, setTodoData] = useState([])
  const [filter, setFilter] = useState('All')

  const addTask = (el) => {
    setTodoData((todoData ) => {
      const newTodoData =[...todoData, el]
      return newTodoData
    })
  }

  const deleteTask = (id) => {
    let el = todoData.find((el)=>el.id=id)
    clearInterval(el.timerId)
    setTodoData(( todoData ) => {
      const newTodoData = todoData.filter((el) => el.id !== id)
      return  newTodoData
    })
  }

  const changeSetting = (id, setting, value = false) => {
    setTodoData(( todoData ) => {
      const newTodoData = todoData.map((el) => {
        if (el.id === id) {
          el[setting] = !el[setting]
          if(value)  el.label = value
        }
        return el
      })
      return newTodoData
    })
  }

  const  holdTimer = (id,min,sec,play, timerId=false) => {
    setTodoData(( todoData ) => {
      const newTodoData = todoData.map((el) => {
        if (el.id === id) {
          el.play=play,
          el.min=min,
          el.sec=sec,
          el.timerId=timerId
        }
        return el
      })
      return newTodoData   
    })
  }

  const onToggleDone = (id) => {
    changeSetting(id, 'done')
  }

  const editing = (id) => {
    changeSetting(id, 'edit')
  }

  const finishEditing = (id, value) => {
    changeSetting(id, 'edit', value)
  }

  const changeFilter = (value) => {
    setFilter(value)
  }

  const deleteCompleted = () => {
    setTodoData(( todoData ) => {
      const newTodoData = todoData.filter((el) => !el.done)
      return newTodoData
    })
  }

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
        <NewTaskForm addTask={addTask} />
      </header>
      <section className="main">
        <MyContext.Provider value = {holdTimer}>
          <TaskList
            todos={todoItemsShown}
            onDeleted={(id) => deleteTask(id)}
            onToggleDone={onToggleDone}
            editing={editing}
            finishEditing={finishEditing}
            holdTimer={holdTimer}
          />
        </MyContext.Provider>
        <Footer
          counterLeft={counterLeft}
          onClear={deleteCompleted}
          onChangeFilter={changeFilter}
          filterSelected={filter}
        />
      </section>
    </section>
  )
}

export default App