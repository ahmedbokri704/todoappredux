import React from 'react';
import './App.css';
import NewTodo from './components/newTodo';
import TodoList from './components/toDoList';

function App(props) {
  return (
    <div>
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;