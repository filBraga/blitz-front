import './App.css';
import Title from './components/Title'
import Task from './components/Task'
import NewTask from './components/NewTask'
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={apiResponse: ''}
  }

  callApi(){
    fetch(process.env.TESTE_URL)
      .then(res => res.text())
      .then(res => this.setState({apiResponse: res}));
  }

  componentDidMount(){
    this.callApi();
  }

  render() {
    return (
      <div className='App'>

        <div className='DefaultComponent'>
          <Title text={this.state.apiResponse} />
        </div>

        <div className='DefaultComponent'>
          <Title text='To do test' />
        </div>

        <div className='DefaultComponent'>
          <Task text='Do front-end App' />
        </div>

        <div className='DefaultComponent'>
          <Task text='Do back-end App' />
        </div>

        <div className='DefaultComponent'>
          <Task text='Lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum' />
        </div>

        <div className='DefaultComponent'>
          <NewTask />
        </div>

      </div>
    );
  }
}

export default App;
