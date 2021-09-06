import React, { FormEvent } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../../hooks/useForm.';
import { Todo } from '../interfaces/Todo';
import '../reducer.css';

interface Props {
  handleAddTodo: ( todo: Todo ) => void;
}

const TodoForm = ({ handleAddTodo }: Props ) => {
  const { state, handleInputChange, reset } = useForm( {
    desc: ''
  });

  const { desc } = state;

  const handleSubmit = ( form: FormEvent<HTMLFormElement> ) => {
    form.preventDefault();

    if ( desc.trim().length <= 1 ) {
      return
    }

    const task = {
      id: new Date().getTime(),
      done: false,
      desc: desc
    };

    handleAddTodo( task );

    reset();

  };

  return (
    <>
      <h4 className={ '[ text-xl ]' }>Add TODO</h4>
      <hr/>
      <form onSubmit={ handleSubmit }>
        <input
          className={
            "[ form-input ]" +
            "[ shadow-sm  ]" +
            "[ w-full ]" +
            "[ focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ]" +
            "[ rounded-md border-gray-300  ]"
          }
          type="text"
          name="desc"
          placeholder="Describe your task"
          onChange={ handleInputChange }
          value={ desc }
          autoComplete="off"/>
        <button className={ "[ border-2 bg-blue-50 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white ]" }>
          Add task
        </button>
      </form>
    </>
  );
};

TodoForm.propTypes = {
  handleAddTodo: PropTypes.func.isRequired
};

export default TodoForm;
