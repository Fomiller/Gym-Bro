import React, { useRef } from 'react';
import { useGlobalContext } from '../../utils/globalContext';
import { login } from '../../utils/API';
import { Redirect } from 'react-router-dom';
// Material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 50,
  },
  header: {
    marginTop: 50
  },
  button: {
    marginBottom: theme.spacing(1)
  }
}));

export default function LoginForm() {
  const [state, dispatch] = useGlobalContext();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const classes= useStyles();

  // handler functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    // send data to server to request login
    const user = await login({
      email: emailRef.current.value,
      password: passwordRef.current.value
    });
    // reset input fields on submit
    emailRef.current.value = '';
    passwordRef.current.value = '';
    // if login unsuccessful log err
    if(user === undefined) { 
      console.log("USER NOT FOUND");
    }
    // change global state 
    dispatch({ type: "SET_USER", payload: user });
    dispatch({ type: "LOGIN", payload:true });
  };

  if (state.loggedIn) {
    return <Redirect to='/home'/>
  } else {
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
            {/* <Grid container direction='row' justify='flex-end' alignItems='center'>
              <Grid item xs={12}>
                <Link component={NavLink} variant='body2' to='/Signup'>Signup</Link>
              </Grid>
            </Grid> */}
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
              inputRef={passwordRef} 
              id="standard-basic" 
              label="password"
              fullWidth={true}
              type='password'
              />
            </Grid>
            <Grid item>
              <Button color='primary' variant='outlined' className={classes.button} onClick={handleSubmit}>Login</Button>
              <br/>
              <Typography variant='body2' style={{display:"inline-block"}}>Need to create an account?&nbsp;</Typography>
              <Link component={NavLink} variant='body2' to='/Signup' style={{display:"inline-block"}}>Signup</Link>
            </Grid>
          </Grid>
          </form>
        </Paper>
      </Container>
    )
  }
}