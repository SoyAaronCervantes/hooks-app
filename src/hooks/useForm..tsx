import { ChangeEvent, useState } from 'react';

export const useForm = <T extends object >( initialState: T ) => {
  const [ state, setState ] = useState( initialState );
  const reset = () => setState( initialState );
  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [ target.name ]: target.value } );
  };

  return { state, handleInputChange, reset };

};