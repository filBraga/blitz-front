import './App.css';
import Title from './components/Title'
import Task from './components/Task'

function App() {
  return (
    <div className='App'>

      <div className='DefaultComponent'>
        <Title text='To do test' />
      </div>

      <div className='DefaultComponent'>
        <Task text='Do front-end App' />
      </div>
      
    </div>
  );
}

export default App;
