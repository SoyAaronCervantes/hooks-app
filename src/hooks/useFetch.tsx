import { useEffect, useRef, useState } from 'react';

export const useFetch = (url: string ) => {
  const isMounted = useRef( true );
  const [ state, setState ] = useState({
    data: null,
    error: null,
    loading: true
  });

  useEffect( () => {
    return () => { isMounted.current = false; };
  }, [] );

  useEffect( () => {

    setState({ data: null, loading: true, error: null });

    fetch( url )
      .then( value => value.json() )
      .then( data => setState({ data, loading: false, error: null }) );
  }, [ url ] );

  return state;
}