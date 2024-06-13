import { GetTodos } from './components/GetTodos/GetTodos';
import { AddPost } from './components/AddPost/AddPost';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className='todo-box'>
        <div className='todo-header'>
          <AddPost />
        </div>
        <div className='todo-body'>
          <GetTodos />
        </div>
      </div>
    </div>
  );
}

export default App;
