// TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, completeTodo, deleteTodo, editTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
