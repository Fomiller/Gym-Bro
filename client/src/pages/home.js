import React from 'react';
import Nav from '../components/nav';
import { useGlobalContext } from '../utils/globalContext';

export default function HomePage() {
  const [state, dispatch] = useGlobalContext();

  if(state.user) {
    return (
      <div>
        <Nav/>
        <h1>HomePage</h1>
        <h2>Welcome {state.user.username}!</h2>
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