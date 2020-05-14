import React, { useRef } from 'react';
import { createUser } from '../../utils/API';
import { useGlobalContext } from '../../utils/globalContext';
import { Redirect } from 'react-router-dom';

export default function SignupForm() {
  const [state, dispatch] = useGlobalContext();
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // create new user on submit
  const handleSubmit = async (e) => {
    console.log(emailRef.current.value);
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
    dispatch({type: "SET_USER", payload:newUser})
  };

  // Redirect to homepage if user exists
  if (state.user) {
    return <Redirect to='/home'/>
  } 
  // Render Signup form if user === null
  else {
    return (
      <div>
        <form>
          <input
          ref={emailRef}
          placeholder="email"
          />
          <input
          ref={usernameRef}
          placeholder="username"
          />
          <input
          ref={passwordRef}
          placeholder="password"
          />
          <button onClick={handleSubmit}>Signup</button>
        </form>
      </div>
    );
  };
};