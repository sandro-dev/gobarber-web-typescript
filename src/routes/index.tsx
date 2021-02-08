import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const routes: React.FC = () => {
  return (
    <Switch>
      {/* <Route path="/" exact component={Dashboard} /> */}
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default routes;
