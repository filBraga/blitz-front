import axios from 'axios';
import React, { useContext } from 'react'
import { useRef } from 'react';
import AppContext from '../context/AppContext'
import taskAPI from '../services/tasksAPI'

export default function Task(props) {
  const ref = useRef(null)

  const { tasks, setTasks } = useContext(AppContext);

  const createTask = (value) => {
    // console.log(value);
    let taskId = 0
    try {
      const { id } = tasks.at(-1);
      taskId = id
    } catch (error) {
      // console.log(error);
    }
    // setTasks(tasks.concat({id: taskId + 1, text: value}));
    axios.post('http://localhost:9000/tasks', {
      text: value
    })
  }


  return (
    <div className='DefaultComponent'>
      <h4>New task</h4>
      <textarea
        rows="4"
        cols="35"
        style={{ resize:'none'}}
        defaultValue='Type here'
        ref={ref}
      />
      <br />
      <button onClick={() => createTask(ref.current.value)}>Create</button>
    </div>
  )
}