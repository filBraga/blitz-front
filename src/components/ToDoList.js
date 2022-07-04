import React, { useContext, useEffect } from 'react'
import AppContext from '../context/AppContext'

import Title from './Title'
import Task from './Task'
import NewTask from './NewTask'


export default function ToDoList() {
  const { apiResponse, setApiResponse, tasks } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
    //  await fetch('https://blitz-back.herokuapp.com/testApi')
     await fetch('http://localhost:9000/testApi')
       .then(res => res.text())
       .then(res => setApiResponse(res));
    }
    fetchData();
  }, []);


  return (
    <div className='App'>

    <p>{apiResponse}</p>

    <Title text='To do test' />

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

    </div>
  )
  
}

