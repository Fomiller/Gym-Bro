import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage, SignupPage, LoginPage, AboutPage, UserPage } from './pages';
import Nav from './components/nav';

function App() {

  const DefaultRoutes = () => {
      return (
        <div>
          <Nav/>
          <Switch>
            <Route exact path={[`${process.env.PUBLIC_URL}/`,`${process.env.PUBLIC_URL}/home`]} component={HomePage}/>
            <Route exact path={`${process.env.PUBLIC_URL}/about`} component={AboutPage}/>
            <Route exact path={`${process.env.PUBLIC_URL}/user/:id`} component={UserPage}/>
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
