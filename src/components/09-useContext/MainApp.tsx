import React, { useState } from 'react';
import '../styles.css';
import AppRouter from './AppRouter';
import { UserContext } from './component/user-content';

const MainApp = () => {
  const [ user, setUser ] = useState({} );
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter/>
    </UserContext.Provider>
  );
};

export default MainApp;
