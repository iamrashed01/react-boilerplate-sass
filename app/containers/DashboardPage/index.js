/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

export default function DashboardPage() {
  return (
    <Fragment>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <h1>dashboard page</h1>
    </Fragment>
  );
}
