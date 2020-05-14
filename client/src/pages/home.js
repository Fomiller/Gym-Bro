import React from 'react';
import Nav from '../components/nav';
import { useGlobalContext } from '../utils/globalContext';
import { logout } from '../utils/API';

export default function HomePage() {
  const [state, dispatch] = useGlobalContext();

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
    dispatch({ type: 'LOGOUT' });
  }

  if(state.user) {
    return (
      <div>
        <Nav/>
        <h1>HomePage</h1>
        <h2>Welcome {state.user.username}!</h2>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
    );
  } else {
    return (
      <div>
        <Nav/>
        <h1>HomePage</h1>
      </div>
    )
  }
};