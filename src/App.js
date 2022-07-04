import './App.css';
import React from 'react';

import AppProvider from './context/AppProvider'

import ToDoList from './components/ToDoList';


class App extends React.Component {
  render() {
    return (
      <AppProvider>
        <ToDoList />
      </AppProvider>
    );
  }
}

export default App;
