import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import { BreakingBadApi } from '../../interfaces/breaking-bad-api.interface';
import {  } from '@heroicons/react/solid'
import Loading from './Loading';
import CharacterQuote from './CharacterQuote';
import { useCounter } from '../../hooks/useCounter';


const MultipleCustomHooks = () => {
  const { increment, decrement, counter } = useCounter(1);

  const baseURL = "https://www.breakingbadapi.com/api";
  const url = `${ baseURL }/quotes/${ counter }`;
  const { loading, data } = useFetch( url );
  const value: BreakingBadApi[] = [...data!!];

  return (
    <div className={ loading ? "[ p-16 ] [ h-screen ]" : "[ p-16 ]" }>
      <h1 className={ "[ text-3xl ]" }>Breaking Bad Quotes</h1>
      <hr/>
      {
        loading ?
          <Loading/> :
          <div className={"[ flex flex-col ] [ justify-end ] [ gap-10 ]"}>
            { value.map ( value => <CharacterQuote key={ value.quote_id } quote={value}/> ) }
            <div className={"[ flex ] [ justify-center ] [ gap-10 ]"}>
              <button
                type="button"
                className={
                  "[ flex ]" +
                  "[ items-center ]" +
                  "[ gap-x-5 ]" +
                  "[ px-3 py-1 ]" +
                  "[ bg-indigo-700 text-white ]" +
                  "[ rounded ]" }
                onClick={ decrement }>
                Previous Quote
              </button>
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
      }
    </div>
  );
};

export default MultipleCustomHooks;
