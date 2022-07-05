import React, { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext'
import axios from 'axios';


import Title from './Title'
import Task from './Task'
import NewTask from './NewTask'

export default function ToDoList() {
  const { apiResponse, tasks, setTasks } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
    //  await fetch('https://blitz-back.herokuapp.com/testApi')
    const responseFetch = await axios.get('http://localhost:9000/tasks')
      await setTasks(responseFetch.data)
    }
    fetchData();
  }, []);


  return (
    <div className='App'>

    <Title text='To Do List' />

    { tasks.length === 0 &&
      <h2>You have {tasks.length} tasks</h2> }

    { tasks.map((element) => {
        return ( 
          <div key={element.id} className='DefaultComponent'> 
            <Task text={element.text} taskId={element.id}/>
          </div>
        )
      }) }

    <NewTask />

    <p>{apiResponse}</p>

    </div>
  )
  
}

