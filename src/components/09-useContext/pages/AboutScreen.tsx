import React, { useContext } from 'react';
import { UserContext } from '../component/user-content';

const AboutScreen = () => {
  const { user, setUser } = useContext( UserContext );
  const handleClick = () => setUser({})
  return (
    <>
      <h1>About Screen</h1>
      <hr/>
      <pre>
        { JSON.stringify( user ) }
      </pre>
      <button
        onClick={ handleClick }
        className={"[ mt-4 ] [ bg-blue-200 text-gray-800 ]"}>
        Logout
      </button>
    </>
  );
};

export default AboutScreen;
