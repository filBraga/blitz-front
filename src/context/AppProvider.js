import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const [apiResponse, setApiResponse] = useState('');

  let [callAPI, setCallAPI] = useState([0])

  const contextValue = {
    tasks, setTasks,
    apiResponse, setApiResponse,
    callAPI, setCallAPI,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
