import React, { useState } from 'react';

const Todo = ({ todo, index, completeTodo, deleteTodo, editTodo }) => {
  const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setEditing(!isEditing);
  };

  const handleSave = () => {
    editTodo(index, newText);
    setEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Todo;
