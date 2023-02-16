import './index.css'
import { useStore } from '../store'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import uuid from 'react-uuid'

function Task () {
  const { taskStore } = useStore()
  const onChange = (id) => taskStore.singlechange(id)
  const allcheked = (e) => taskStore.allChange(e.target.checked)
  const delBtn = (id) => taskStore.delete(id)

  const [taskDate, setTaskDate] = useState('')

  const keychange = (e) => setTaskDate(e.target.value)
  const addTask = (e) => {
    if (e.keyCode === 13) {
      taskStore.addDate({
        id: uuid(),
        name: taskDate,
        isDone: false
      })
      setTaskDate('')
    }
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"

          value={taskDate}
          onChange={keychange}
          onKeyUp={addTask}
        />
      </header>

      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox"
          checked={taskStore.isAll}
          onChange={allcheked} />

        <label htmlFor="toggle-all"></label>

        <ul className="todo-list">
          {taskStore.list.map(item => (
            <li className={item.isDone ? 'todo completed' : 'todo'} key={item.id}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.isDone}
                  onChange={() => onChange(item.id)} />
                <label>{item.name}</label>

                <button className="destroy"
                  onClick={() => delBtn(item.id)}></button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className='footer'>
        <span className='todo-count'>
          总任务数:{taskStore.list.length}  已完成:{taskStore.listFinish}
        </span>
      </footer>
    </section>
  )
}

export default observer(Task)