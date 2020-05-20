import React, { useRef } from 'react';
import { createUser } from '../../utils/API';
import { useGlobalContext } from '../../utils/globalContext';
import { Redirect, NavLink } from 'react-router-dom';
// Material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    marginTop: 50,
  },
  header: {
    marginTop: 50
  }
}));

export default function SignupForm() {
  const [state, dispatch] = useGlobalContext();
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const classes = useStyles();

  // create new user on submit  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // send input data to server
    const newUser = await createUser({
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value
    });
    // reset vlaues of inputs
    emailRef.current.value = '';
    usernameRef.current.value = '';
    passwordRef.current.value = '';
    // check response
    if (newUser === undefined) {
      console.log("USER IS UNDEFINED")
    }
    // change global state
    dispatch({ type: "SET_USER", payload: newUser });
    dispatch({ type: "LOGIN", payload: true });
  };

  // Redirect to homepage if user exists
  if (state.loggedIn) {
    return <Redirect to='/home'/>
  } 
  // Render Signup form if user === null
  else {
    return (
      <Container maxWidth='xs'>
        <Grid container justify='center' className={classes.header}>
          <Grid item>
            <Link component={NavLink} to='/' style={{color:'black', textDecorationLine:'none'}}>
              <Typography variant='h2'>
                GYMBRO
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Paper className={classes.paper} elevation={3}>
        <form>
        <Grid container justify='center' spacing={2}>
          <Grid container direction='row' justify='flex-end' alignItems='center'>
            <Grid item xs={12}>
              <Link component={NavLink} variant='body2' to='/Login'>Login</Link>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
            inputRef={emailRef} 
            id="standard-basic" 
            label="Email"
            fullWidth={true}
            />
            </Grid>
          <Grid item xs={12}>
            <TextField
            inputRef={usernameRef} 
            id="standard-basic" 
            label="Username"
            fullWidth={true}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            inputRef={passwordRef} 
            id="standard-basic" 
            label="Password"
            fullWidth={true}
            type='password'
            />
          </Grid>
          <Grid item>
            <Button color='primary' variant='outlined' onClick={handleSubmit}>Signup</Button>
          </Grid>
        </Grid>
        </form>
      </Paper>
    </Container>
    );
  };
};