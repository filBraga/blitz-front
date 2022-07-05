import axios from 'axios';
import React, { useContext } from 'react'
import { useRef } from 'react';
import AppContext from '../context/AppContext'


export default function Task(props) {
  const ref = useRef(null)
  const { callAPI, setCallAPI } = useContext(AppContext);


  const createTask = (value) => {
    setCallAPI(callAPI + 1)
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