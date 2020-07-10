import React from 'react';
import { Route } from 'react-router-dom';
const PrivateRoute = props => {
  const { component: Component, ...rest } = props;
  return <Route {...rest} render={props => <Component {...props} />} />;
};
export default PrivateRoute;
