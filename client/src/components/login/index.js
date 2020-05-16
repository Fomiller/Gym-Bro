import React, { useRef } from 'react';
import { useGlobalContext } from '../../utils/globalContext';
import { login } from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Button, Input } from 'antd';

export default function LoginForm() {
  const [state, dispatch] = useGlobalContext();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
  };

  if (state.user) {
    return <Redirect to='/home'/>
  } else {
    return (
      <div>
        <form>
        <Input
          ref={emailRef}
          placeholder="email"
          />
          <Input.Password
          ref={passwordRef}
          placeholder="password"
          />
          {/* <button onClick={handleSubmit}>Login</button> */}
          <Button onClick={handleSubmit}>Login</Button>
        </form>
      </div>
    )
  }
}