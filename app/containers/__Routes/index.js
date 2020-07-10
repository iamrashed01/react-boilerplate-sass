import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import DashboardPage from 'containers/DashboardPage/Loadable';
import PrivateRoute from '../_PrivateRoute';
// import PublicRoute from '../_PublicRoute';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path="/" component={DashboardPage} />
    {/* <PublicRoute path="/login" component={} /> */}
    <Route component={NotFoundPage} />
  </Switch>
);
export default Routes;
