import './App.css';
import Title from './components/Title'
import Task from './components/Task'

function App() {
  return (
    <div className='App'>
      <header>
        <div className='DefaultComponent'>
          <Title text='To do test' />
        </div>
      </header>
      <body>
        <div className='DefaultComponent'>
          <Task text='Do front-end App' />
        </div>
      </body>
    </div>
  );
}

export default App;
