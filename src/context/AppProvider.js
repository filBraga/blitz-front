import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'This is the First Task'},
    { id: 2, text: 'This is the Second Task'},
  ]);
  
  const contextValue = {
    tasks,
    setTasks,
  };

  return (
    <AppContext.Provider value={{tasks, setTasks, contextValue}}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
