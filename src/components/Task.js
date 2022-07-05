import React from 'react'
import axios from 'axios';

export default function Task(props) {

  const deleteTask = (taskId) => {
    const url = `http://localhost:9000/tasks/${taskId}`
    axios.delete(url)
    window.location.reload(false);
  }

  const updateTask = (taskId) => {
    // https://medium.com/@hayden.anderl33/build-a-full-crud-to-do-list-using-react-hooks-7a61ed09fcab
    let newItem = prompt(`Update ${props.text}?`, props.text)
    console.log(newItem);

    const url = `http://localhost:9000/tasks/${taskId}`
    axios.put(url, {
        text: newItem
    })
    window.location.reload(false);
  }

  const doneTask = (taskId) => {
    // https://stackoverflow.com/questions/42630473/react-toggle-class-onclick
    console.log('Not implemented yet');
  }
  
    return (
      <div>

        <p>{props.text}</p>

        <button onClick={() => deleteTask(props.taskId)}>Delete</button>

        <button onClick={() => updateTask(props.taskId)}>Update</button>

        <button onClick={() => doneTask(props.taskId)}>Done</button>

      </div>
    );
  
  
}