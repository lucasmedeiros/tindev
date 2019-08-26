import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/auth/Login';
import Main from './pages/Main';
import Auth from './pages/auth/Auth';
import Logout from './pages/auth/Logout';
import MainLayout from './layouts/MainLayout';
import AppRouteLayout from './layouts/AppRouteLayout';
import Page404 from './pages/404/Page404';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/auth/:accessToken" component={Auth} />
        <Route path="/logout" component={Logout} />
        <AppRouteLayout
          path="/dev/:id" exact
          layout={MainLayout}
          component={Main} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;