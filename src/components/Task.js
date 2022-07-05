import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

export default function Task(props) {

  const { tasks, setTasks } = useContext(AppContext);

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter(item => item.id !== taskId);
    setTasks(newTasks);
  }

  const updateTask = (props) => {
    // https://medium.com/@hayden.anderl33/build-a-full-crud-to-do-list-using-react-hooks-7a61ed09fcab
    const newTasks = [...tasks]
 
    let newItem = prompt(`Update ${props.text}?`, props.text)
    let newObj = {id: props.taskId, text: newItem}

    newTasks.splice(props.taskId - 1, 1, newObj)
    setTasks(newTasks);
  }

  const doneTask = (taskId) => {
    // https://stackoverflow.com/questions/42630473/react-toggle-class-onclick
    console.log('Not implemented yet');
  }
  
    return (
      <div>

        <p>{props.text}</p>

        <button onClick={() => deleteTask(props.taskId)}>Delete</button>

        <button onClick={() => updateTask(props)}>Update</button>

        <button onClick={() => doneTask(props.taskId)}>Done</button>

      </div>
    );
  
  
}