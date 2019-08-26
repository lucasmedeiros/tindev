import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/auth/Login';
import Main from './pages/Main';
import Auth from './pages/auth/Auth';
import Logout from './pages/auth/Logout';
import MainLayout from './layouts/MainLayout';
import AppRouteLayout from './layouts/AppRouteLayout';

function Routes() {
  return(
    <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/auth/:accessToken" component={Auth} />
        <Route path="/logout" component={Logout} />
      </Switch>

      <AppRouteLayout path="/dev/:id" layout={MainLayout} component={Main} />
    </BrowserRouter>
  );
}

export default Routes;