import React from 'react';
import Nav from '../components/nav';
import { useGlobalContext } from '../utils/globalContext';
import { logout } from '../utils/API';
import Hero from '../components/hero';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

export default function HomePage() {
  const [state, dispatch] = useGlobalContext();

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
    dispatch({ type: 'LOGOUT', payload: false });
  }

  if(state.loggedIn) {
    return (
      <Box>
      <Hero/>
      <Container>
        <div>
          <h1>HomePage</h1>
          <h2>Welcome {state.user.username}!</h2>
          <Button color='primary' variant='contained' onClick={handleLogout}>Logout</Button>
        </div>
      </Container>
      </Box>
    );
  } else {
    return (
      <Box>
        <Hero/>
        <Container>
          <div>
            <h1>HomePage</h1>
          </div>
        </Container>
      </Box>
    )
  }
};