import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style.css';

const NavbarComponent = () => {
  return (
    <nav className={"[ nav ]"}>
      <span className={"[ nav--title ]"}>Router app</span>
      <ul className={"[ nav--navigation ]"}>
        <li>
          <NavLink
            to="/"
            activeClassName={"[ nav--active ]"}
            className={"[ nav--element ]"}
            exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName={"[ nav--active ]"}
            className={"[ nav--element ]"}
            exact>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            activeClassName={"[ nav--active ]"}
            className={"[ nav--element ]"}
            exact>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
