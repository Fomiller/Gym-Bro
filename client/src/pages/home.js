import React from 'react';
import Nav from '../components/nav';
import { useGlobalContext } from '../utils/globalContext';
import { logout } from '../utils/API';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


export default function HomePage() {
  const [state, dispatch] = useGlobalContext();

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
    dispatch({ type: 'LOGOUT', payload: false });
  }

  if(state.loggedIn) {
    return (
      <Container>
        <div>
          <h1>HomePage</h1>
          <h2>Welcome {state.user.username}!</h2>
          <Button color='primary' variant='contained' onClick={handleLogout}>Logout</Button>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
      <div>
        <h1>HomePage</h1>
      </div>
      </Container>
    )
  }
};