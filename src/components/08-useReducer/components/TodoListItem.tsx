import React from 'react';
import PropTypes from 'prop-types';
import { Todo } from '../interfaces/Todo';

import '../reducer.css';

interface Props {
  todo: Todo;
  index: number;
  handleDelete: (id: number) => void;
  handleToggle: (id: number) => void;
}

const TodoListItem = ({ todo, index ,handleDelete, handleToggle }: Props) => {
  return (
    <li
      key={ todo.id }
      className={ "[ todo ] [ gap-x-4 ]" }
      onClick={ () => handleToggle( todo.id ) }>
      <p className={ `${ todo.done && 'line-through' } [ truncate w-3/4 ]` }>
        <span className={ "[ mr-2 ]" }>{ index + 1 }.</span>
        { todo.desc }
      </p>
      <button
        className={ '[ btn-delete ]' }
        onClick={ () => handleDelete( todo.id ) }>
        Borrar
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default TodoListItem;
