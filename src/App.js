import './App.css';
import React from 'react';

import AppProvider from './context/AppProvider'

import ToDoList from './components/ToDoList';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      apiResponse: '',
    }
  }

  callApi(){
    // fetch('https://blitz-back.herokuapp.com/testApi')
    fetch('http://localhost:9000/testApi')
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  componentDidMount(){
    this.callApi();
  }

  render() {
    return (
      <AppProvider>
        <ToDoList />
      </AppProvider>
    );
  }
}

export default App;
