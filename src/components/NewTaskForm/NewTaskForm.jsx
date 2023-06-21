import './NewTaskForm.css'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'


const NewTaskForm = ({addTask}) => {

  const [label, setLabel] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const onSending = ({key}) => {
    if (key === 'Enter') {
      if (!/[^\s]/.test(label)) return
      let el = createEl(label, min, sec)
      addTask(el)

      setLabel('')
      setMin('')
      setSec('')

      document.getElementById('label').focus()
    }
  }

  const onInputChange = (e) => {
    let key= e.target.id
    let value = e.target.value
    if(key==='sec' && e.target.value>59){ 
      e.target.style.color='#FF0000'
      return
    } else {
      e.target.style.color='#010000'
    }
    key==='label'?setLabel(value):key==='min'?setMin(value):setSec(value)
  }

  const runNext = ({key, target}) => {
    if (key === 'Enter') {
      target.nextSibling.focus()
    }
  }

  const createEl = (label, min, sec) =>{
    min=min?+min:0
    sec=sec?+sec:0
    let date = new Date()
    return {
      label: label,
      id: uuidv4(),
      date: date,
      done: false,
      edit: false,
      play:false,
      min:min,
      sec:sec,
      timerId:null
    }
  }

  return (
    <form className="new-todo-form">
      <input  id='label' className="new-todo" placeholder="What needs to be done?"
        onChange={onInputChange} autoFocus onKeyDown={runNext} value={label}
      />
      <input  id='min' className="new-todo-form__timer"  onChange={onInputChange} type='number'
        value={min} placeholder="Min" onKeyDown={runNext}/>
      <input  id='sec' className="new-todo-form__timer"  onChange={onInputChange} type='number'
        value={sec} placeholder="Sec" max={59} onKeyDown= {onSending}/>
    </form>
  )
}


NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
}

export default NewTaskForm
