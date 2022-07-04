import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'This is the First Task'},
    { id: 2, text: 'This is the Second Task'},
  ]);

  const [apiResponse, setApiResponse] = useState('');

  const createTask = (value) => {
    console.log(value);
    const { id } = tasks.at(-1);
    setTasks(tasks.concat({id: id + 1, text: value}));
  }

  const deleteTask = () => {
    console.log('Delete Task');
    // let taskList = this.state.tasks
    // taskList.splice(index, 1);
    // this.setState({tasks: taskList})
  }
  
  const contextValue = {
    tasks, setTasks,
    apiResponse, setApiResponse,
    createTask, deleteTask,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
