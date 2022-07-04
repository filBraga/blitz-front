import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'This is the First Task'},
    { id: 2, text: 'This is the Second Task'},
  ]);

  const [apiResponse, setApiResponse] = useState('');
  
  const contextValue = {
    tasks, setTasks,
    apiResponse, setApiResponse,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
