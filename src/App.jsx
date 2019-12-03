import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Login } from './components/login';
import { Home } from './components/home';
import { PlanetDetails } from './components/planet-details';
import { NoMatch } from './components/no-match';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/planets/:id">
            <PlanetDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
