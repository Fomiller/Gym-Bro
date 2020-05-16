import React, { useRef } from 'react';
import { createUser } from '../../utils/API';
import { useGlobalContext } from '../../utils/globalContext';
import { Redirect } from 'react-router-dom';
import { Button, Input } from 'antd';

export default function SignupForm() {
  const [state, dispatch] = useGlobalContext();
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // create new user on submit  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // send input data to server
    const newUser = await createUser({
      email: emailRef.current.input.value,
      username: usernameRef.current.input.value,
      password: passwordRef.current.input.value
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
    dispatch({ type: "SET_USER", payload: newUser })
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
          <Input
          ref={emailRef}
          placeholder="email"
          />
          <Input
          ref={usernameRef}
          placeholder="username"
          />
          <Input.Password
          ref={passwordRef}
          placeholder="password"
          />
          <Button onClick={handleSubmit}>Signup</Button>
        </form>
      </div>
    );
  };
};