import React, { FormEvent, useEffect } from 'react';
import { useForm } from '../../hooks/useForm.';

const FormWithHook = () => {
  const { state, handleInputChange } = useForm({
    name: '',
    email: '',
    password: ''
  });
  const { name, email, password } = state;

  useEffect( () => {
    console.log('Email changed')
  }, [ email ] );

  const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    console.log( state );
  };

  return (
    <div className={ "[ p-16 ]" }>
      <h1 className={ "[ text-3xl ]" }>Form With Custom Hook</h1>
      <hr/>
      <form
        className={ "[ form ] [ p-5 ] [ flex flex-col ] [ justify-center items-center ] [ gap-y-5 ]" }
        onSubmit={ handleSubmit }>

        {/* INPUT NAME */}
        <label className={
          "[ flex flex-col ]" +
          "[ w-1/3 ]"}>

          <input
            className={
              "[ form-input ]" +
              "[ shadow-sm  ]" +
              "[ focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ]" +
              "[ rounded-md border-gray-300  ]" }
            type="text"
            name="name"
            placeholder="Write your name"
            onChange={ handleInputChange }
            value={ name }/>

          <span className={"[ text-gray-400 ] [ mx-3 ]"}>Ex: Aarón Cervantes</span>

        </label>

        {/* INPUT EMAIL */}
        <label className={
          "[ flex flex-col ]" +
          "[ w-1/3 ]"}>

          <input
            className={
              "[ form-input ]" +
              "[ shadow-sm  ]" +
              "[ focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ]" +
              "[ rounded-md border-gray-300  ]" }
            type="email"
            name="email"
            placeholder="Write your email"
            onChange={ handleInputChange }
            value={ email }
            autoComplete="false"/>

          <span className={"[ text-gray-400 ] [ mx-3 ]"}>Ex: example@email.com</span>

        </label>

        {/* INPUT PASSWORD */}
        <label className={
          "[ flex flex-col ]" +
          "[ w-1/3 ]"}>

          <input
            className={
              "[ form-input ]" +
              "[ shadow-sm  ]" +
              "[ focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ]" +
              "[ rounded-md border-gray-300  ]" }
            type="password"
            name="password"
            placeholder="Use a strong password"
            onChange={ handleInputChange }
            value={ password }
            autoComplete="false"/>

          <span className={"[ text-gray-400 ] [ mx-3 ]"}>Shh... no one will know your password</span>

        </label>

        {/* Submit Button */}
        <button
          className={"[ flex ] [ px-6 py-2 ] [ rounded ] [ bg-blue-800 text-white ]"}
          type="submit">
          Guardar
        </button>

      </form>

    </div>
  );
};
export default FormWithHook;

