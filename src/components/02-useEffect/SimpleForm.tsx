import React, { ChangeEvent, useEffect, useState } from 'react';
import Message from './Message';

const SimpleForm = () => {
  const [ state, setState ] = useState( {
    name: '',
    email: ''
  } );

  const { name, email } = state

  useEffect( () => { }, []);

  const handleInputChange = ( { target }: ChangeEvent<HTMLInputElement> ) => setState({ ...state, [ target.name ]: target.value });

  return (
    <div className={ "[ p-16 ]" }>
      <h1 className={ "[ text-3xl ]" }>useEffect</h1>
      <hr/>
      <form className={ "[ form ] [ p-5 ] [ flex ] [ gap-x-5 ]" }>

        {/* INPUT NAME */}
        <label className={
        "[ flex flex-col ]" +
        "[ w-1/2 ]"}>

          <input
            className={
              "[ form-input ]" +
              "[ shadow-sm  ]" +
              "[ focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ]" +
              "[ rounded-md border-gray-300  ]" }
            type="text"
            name="name"
            placeholder="Write your name"
            onChange={ ( e ) => handleInputChange( e ) }
            value={ name }/>

          <span className={"[ text-gray-400 ] [ mx-3 ]"}>Ex: Aarón Cervantes</span>

        </label>

        {/* INPUT EMAIL */}
        <label className={
          "[ flex flex-col ]" +
          "[ w-1/2 ]"}>

          <input
            className={
              "[ form-input ]" +
              "[ shadow-sm  ]" +
              "[ focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ]" +
              "[ rounded-md border-gray-300  ]" }
            type="email"
            name="email"
            placeholder="Write your email"
            onChange={ ( e ) => handleInputChange( e ) }
            value={ email }
            autoComplete="false"/>

          <span className={"[ text-gray-400 ] [ mx-3 ]"}>Ex: example@email.com</span>

        </label>

      </form>
      { (name === '123' ) && <Message/> }

    </div>
  );
};
export default SimpleForm;

