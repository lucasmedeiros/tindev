import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authService } from '../services/authService';

function AppPrivateRouteLayout({component: Component, layout: Layout, ...rest }) {
  return(
    <Route {...rest} render={props => {
      const currentUser = authService.currentUserValue;

      if (!currentUser)
        return <Redirect to={{
          pathname: '/',
          state: {
            from: props.location,
          }
        }} />
      
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }} />
  );
}

export default AppPrivateRouteLayout;