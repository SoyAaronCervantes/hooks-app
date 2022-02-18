import React, { useContext } from 'react';
import { UserContext } from '../component/user-content';

const HomeScreen = () => {
  const { user } = useContext(UserContext);
  console.log( user );
  return (
    <>
      <h1>Home Screen</h1>
      <hr/>
      <pre>
        { JSON.stringify( user ) }
      </pre>
    </>
  );
};

export default HomeScreen;
