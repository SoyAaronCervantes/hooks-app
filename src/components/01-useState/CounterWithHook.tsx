import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

const CounterApp = () => {

  const { counter, increment, decrement, reset } = useCounter( 100 );

  return (
    <div className={" [ flex p-9 ] "}>
      <h1 className={"[ text-xl ]"}>Counter - { counter }</h1>
      <hr />
      <button onClick={ increment }>+1</button>
      <button  onClick={ decrement }>-1</button>
      <button  onClick={ reset }>Reset</button>
    </div>
  );
};

export default CounterApp;
