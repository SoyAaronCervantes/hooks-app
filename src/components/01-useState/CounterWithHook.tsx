import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

const CounterApp = () => {

  const { state, increment, decrement, reset } = useCounter( 100 );

  return (
    <div className={" [ p-9 ] "}>
      <h1 className={"[ text-xl ]"}>Counter - { state }</h1>
      <hr />
      <button onClick={ () => increment( 2 ) }>+1</button>
      <button  onClick={ () => decrement( 2 ) }>-1</button>
      <button  onClick={ reset }>Reset</button>
    </div>
  );
};

export default CounterApp;
