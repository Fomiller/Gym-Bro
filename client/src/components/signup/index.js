import React, { useRef } from 'react';
import { createUser } from '../../utils/API';
import { useGlobalContext } from '../../utils/globalContext';
import { Redirect } from 'react-router-dom';
// Material-ui imports
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      // <div>
      //   <form>
      //     <input
      //     ref={emailRef}
      //     placeholder="email"
      //     />
      //     <input
      //     ref={usernameRef}
      //     placeholder="username"
      //     />
      //     <input
      //     ref={passwordRef}
      //     placeholder="password"
      //     type='password'
      //     />
      //     <button onClick={handleSubmit}>Signup</button>
      //   </form>
      // </div>
      <Container>
        <Paper className={classes.paper} elevation={3}>
        <form>
        <Grid container justify='center' spacing={2}>
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