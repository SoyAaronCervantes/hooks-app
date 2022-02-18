import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import AboutScreen from './pages/AboutScreen';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import NavbarComponent from './component/navbar.component';

const AppRouter = () => {
  return (
    <Router>
      <div className={"[ flex flex-col ]"}>
        <NavbarComponent/>
        <main className={"[ p-6 ]"}>
          <Switch>
            <Route exact path="/about" component={ AboutScreen }/>
            <Route exact path="/login" component={ LoginScreen }/>
            <Route exact path="/" component={ HomeScreen }/>
            <Route component={ HomeScreen }/>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default AppRouter;
