import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { AiOutlineClose} from 'react-icons/ri';
import { AiFillCreditCard } from 'react-icons/ai';
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
  <ul class="list-group mb-0">
        <li key={todo.id} onClick={() => completeTodo(todo.id)}
        class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
        <div class="d-flex align-items-center">
            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
            {todo.text}
        </div>
        <AiFillCreditCard
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
        />
        <AiOutlineClose
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        </li>
    </ul>          
    </div>
  ));
};

export default Todo;