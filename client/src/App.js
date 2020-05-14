import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, SignupPage, LoginPage } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/login`} component={LoginPage}/>
      <Route exact path={`${process.env.PUBLIC_URL}/signup`} component={SignupPage}/>
      <Route exact path={[`${process.env.PUBLIC_URL}/`,`${process.env.PUBLIC_URL}/home`]} component={HomePage}/>
      <Route exact path={`${process.env.PUBLIC_URL}/*`} component={HomePage}/>
    </Switch>
  );
}

export default App;
