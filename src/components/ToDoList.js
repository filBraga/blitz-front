import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

import Title from './Title'
import Task from './Task'
import NewTask from './NewTask'


export default function ToDoList() {
  const { tasks } = useContext(AppContext);

  return (
    <div className='App'>

    {/* <Title text={this.state.apiResponse} /> */}

    <Title text='To do test' />

    { tasks.length === 0 &&
      <h2>You have {tasks.length} tasks</h2> }

    { tasks.map((element) => {
        return ( 
          <div className='DefaultComponent'> 
            <Task text={element.text} taskId={element.id}/>
          </div>
        )
      }) }

    <NewTask />

    </div>
  )
  
}

