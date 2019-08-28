import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/auth/Login';
import Main from './pages/Main';
import Auth from './pages/auth/Auth';
import Logout from './pages/auth/Logout';
import MainLayout from './layouts/MainLayout';
import Page404 from './pages/404/Page404';
import AppPrivateRouteLayout from './layouts/AppPrivateRouteLayout';
import Matches from './pages/matches/Matches';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/tindev" exact component={Login} />
        <Route path="/tindev/auth/:accessToken" component={Auth} />
        <Route path="/tindev/logout" component={Logout} />
        <AppPrivateRouteLayout
          path="/tindev/dev" exact
          layout={MainLayout}
          component={Main} />        
        <AppPrivateRouteLayout
          path="/tindev/matches" exact
          layout={MainLayout}
          component={Matches} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;