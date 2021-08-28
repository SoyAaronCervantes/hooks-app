import React, { useState } from 'react';

const CounterApp = () => {
  const [ state, setState ] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 60,
    counter4: 900
  });

  const { counter1, counter2 } = state

  return (
    <div className={" [ p-9 ] "}>
      <h1 className={"[ text-xl ]"}>Counter - { counter1 }</h1>
      <h1 className={"[ text-xl ]"}>Counter - { counter2 }</h1>
      <hr />
      <button
        className={ "[ m-5 ] [ px-7 py-1 ] [ text-xl ] [ bg-blue-500 hover:bg-blue-600 text-white ] [ rounded-md ]" }
        onClick={ () => setState({ ...state, counter1: counter1 + 1 }) }>
        +1
      </button>
    </div>
  );
};

export default CounterApp;
