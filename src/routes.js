import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
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
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/auth/:accessToken" component={Auth} />
        <Route path="/logout" component={Logout} />
        <AppPrivateRouteLayout
          path="/dev" exact
          layout={MainLayout}
          component={Main} />        
        <AppPrivateRouteLayout
          path="/matches" exact
          layout={MainLayout}
          component={Matches} />
        <Route component={Page404} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;