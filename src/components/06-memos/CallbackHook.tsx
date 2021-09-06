import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

import '../styles.css';

const CallbackHook = () => {
  const [ counter, setCounter ] = useState( 10 );

  const increment = useCallback( value => {
    setCounter( c => c + value );
  }, [ setCounter ])

  return (
    <div className={"[ container ]"}>
      <h1>useCallback Hook</h1>
      <hr/>
      <p>Counter: { counter }</p>
      <ShowIncrement increment={ increment }/>
    </div>
  );
};

export default CallbackHook;
