import React, { useContext } from 'react';
import { UserContext } from '../component/user-content';

const LoginScreen = () => {
  // 1. Obterner referencia del context
  // 2. setUser
  const { setUser } = useContext( UserContext );
  // 3. Mandar un objecto con id, name
  return (
    <>
      <h1>Login Screen</h1>
      <hr/>
      <button
        onClick={ () => setUser({ id: 123, name: 'Aarón' })}
        className={"[ mt-4 ] [ bg-blue-400 text-white ]"}>
        Actualizar objeto
      </button>
    </>
  );
};

export default LoginScreen;
