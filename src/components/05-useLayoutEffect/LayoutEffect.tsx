import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

const LayoutEffect = () => {

  const { increment, counter } = useCounter(1);

  const baseURL = "https://www.breakingbadapi.com/api";
  const url = `${ baseURL }/quotes/${ counter }`;
  const { data } = useFetch( url ) as any;
  const { quote } = !!data && data[0];
  const ref = useRef<HTMLElement>(null);
  const [ boxSize, setBoxSize ] = useState( {  } );

  useLayoutEffect( () => {
    if ( ref.current ) {
      setBoxSize(ref.current.getBoundingClientRect());
    }
  }, [ quote ]);


  return (
    <div className="[ p-16 ]">
      <h1 className={ "[ text-3xl ]" }>Layout Effect</h1>
      <hr/>
      <pre>{ JSON.stringify( boxSize, null, 3 ) }</pre>

      <div className={"[ flex flex-col ] [ justify-end ] [ gap-10 ]"}>
        <blockquote
          ref={ ref }
          className={"[ flex flex-col ] [ text-right ]"}>

          <p
            className={"[ text-xl ] [ italic ] [ font-light ]"} >
            {quote}
          </p>

        </blockquote>

        <button
          type="button"
          className={
            "[ flex ]" +
            "[ items-center ]" +
            "[ gap-x-5 ]" +
            "[ px-5 py-2 ]" +
            "[ bg-indigo-700 text-white ]" +
            "[ rounded ]" }
          onClick={ increment }>
          Next Quote
        </button>
      </div>
    </div>
  );
};

export default LayoutEffect;
