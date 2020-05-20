import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, SignupPage, LoginPage } from './pages';
import Nav from './components/nav';
import { render } from 'react-dom';

function App() {

  const DefaultRoutes = () => {
      return (
        <div>
          <Nav/>
          <Switch>
            <Route exact path={[`${process.env.PUBLIC_URL}/`,`${process.env.PUBLIC_URL}/home`]} component={HomePage}/>
            <Route exact path={`${process.env.PUBLIC_URL}/*`} component={HomePage}/>
          </Switch>
        </div>
      );
    };

    return (
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/login`} component={LoginPage}/>
        <Route exact path={`${process.env.PUBLIC_URL}/signup`} component={SignupPage}/>
        <Route component={DefaultRoutes}/>
      </Switch>
    );
}

export default App;
