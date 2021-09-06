import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../styles.css';
import { heavyProcess } from '../../helpers/heavyProcess';

const MemoHook = () => {
  const { counter, increment } = useCounter( 5000 );
  const [ show, setShow ] = useState( true );

  const memoHeavyProcess = useMemo( () => heavyProcess ( counter ), [counter] );

  return (
    <div className="container">
      <h1>MemoHook</h1>
      <hr/>
      <h3 className={"[ text-xl mt-6 ]"}>Counter: { counter }</h3>
      <p>{ memoHeavyProcess }</p>
      <button className={ "btn" } onClick={ increment }>Increment</button>
      <button
        className={ "[ bg-transparent text-pink-800 border-pink-800 border-2 hover:bg-pink-50 ]" }
        onClick={ () => setShow( !show ) }>
        Show / Hide { JSON.stringify( show ) }
      </button>
    </div>
  );
};

export default MemoHook;
