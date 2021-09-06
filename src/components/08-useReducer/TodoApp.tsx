import React, { useEffect, useReducer } from 'react';
import { Todo } from './interfaces/Todo';

import { todoReducer } from './todoReducer';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import '../styles.css';
import './reducer.css';

const init = () => {
  const data = localStorage.getItem( 'todos' );
  return data ? JSON.parse( data ) : [];
};

const TodoApp = () => {
  const [ todos, dispatch ] = useReducer( todoReducer, [], init );

  useEffect( () => localStorage.setItem( 'todos', JSON.stringify( todos ) ), [ todos ] );

  const handleDelete = ( id: number ) => {
    const action = { type: 'delete', payload: id };
    dispatch( action );
  };
  const handleToggle = ( id: number ) => {
    const action = { type: 'toggle', payload: id };
    dispatch( action );
  };
  const handleAddTodo = ( todo: Todo ) => {
    const action = { type: 'add', payload: todo };
    dispatch( action );
  };

  return (
    <div className={ "[ container ]" }>
      <h1>Todo App: ({ todos.length }) </h1>
      <hr/>
      <div className={ '[ flex justify-around gap-5 mt-5 ]' }>
        <TodoList todos={ todos } handleDelete={ handleDelete } handleToggle={ handleToggle }/>

        <div className="[ w-2/5 ]">
          <TodoForm handleAddTodo={ handleAddTodo } />
        </div>

      </div>

    </div>

  );
};

export default TodoApp;
