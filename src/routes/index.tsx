import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const routes: React.FC = () => {
  return (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
  </Switch>
  );
}

export default routes;