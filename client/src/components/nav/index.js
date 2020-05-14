import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <NavLink
      exact
      to='/login'
      activeStyle={{
        fontWeight: "bold",
        color: "red"
      }}
      >
        Login
      </NavLink>
      <NavLink
      exact
      to='/signup'
      activeStyle={{
        fontWeight: "bold",
        color: "red"
      }}
      >
        Signup
      </NavLink>
      <NavLink 
      exact
      to='/'
      activeStyle={{
        fontWeight: "bold",
        color: "red"
      }}
      >
        Home
      </NavLink>
    </div>
  );
};