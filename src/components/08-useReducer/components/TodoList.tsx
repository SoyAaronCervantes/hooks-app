import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

import { Todo } from '../interfaces/Todo';
import '../reducer.css';

interface Props {
  todos: Todo[];
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
}

const TodoList = ({ todos, handleDelete, handleToggle }: Props ) => {
  return (
    <ol className={ '[ w-3/5 ]' }>
      { todos.map( ( todo, i ) => (
          <TodoListItem key={ todo.id } todo={ todo } index={ i } handleDelete={ handleDelete } handleToggle={ handleToggle } />
        )
      ) }
    </ol>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default TodoList;
