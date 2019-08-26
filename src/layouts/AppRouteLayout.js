import React from 'react';
import {Route} from 'react-router-dom';

function AppRouteLayout({component: Component, layout: Layout, ...rest}) {
  return(
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
  );
}

export default AppRouteLayout;