import React from 'react';
import Hero from '../components/hero';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ExerciseForm from '../components/exercise-form/exerciseForm';

export default function UserPage() {
  return(
    <Box>
      <Hero/>
      <Container>
        <h1>User Page</h1>
        <ExerciseForm/>
      </Container>
    </Box>
  );
};