import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

export default function Task(props) {

  const { tasks, setTasks } = useContext(AppContext);

  const deleteTodo = (tasks, taskId) => {
    const newTasks = tasks.filter(item => item.id !== taskId);
    setTasks(newTasks);
  }
  
    return (
      <div>

        <p>{props.taskId}. {props.text}</p>

        <button onClick={() => deleteTodo(tasks, props.taskId)}>Delete</button>

        <button>Update</button>

        <button>Done</button>

      </div>
    );
  
  
}