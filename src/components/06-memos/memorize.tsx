import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import Small from './Small';
import '../styles.css';

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [ show, setShow ] = useState( true );
  return (
    <div className="container">
      <h1>Memorize: <Small value={ counter } /> </h1>
      <hr/>
      <button className={"btn"} onClick={increment}>Increment </button>
      <button
        className={ "[ bg-transparent text-pink-800 border-pink-800 border-2 hover:bg-pink-50 ]" }
        onClick={ () => setShow(!show ) }>
        Show / Hide { JSON.stringify( show ) }
      </button>
    </div>
  );
};

export default Memorize;
