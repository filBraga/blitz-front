import axios from 'axios';
import React from 'react'
import { useRef } from 'react';


export default function Task(props) {
  const ref = useRef(null)

  const createTask = async (value) => {
    axios.post('http://localhost:9000/tasks', {
      text: value
    })
    window.location.reload(false);
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