import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Main from './pages/Main';
import Auth from './pages/auth/Auth';
import Logout from './pages/auth/Logout';

function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dev/:id" component={Main} />
      <Route path="/auth/:accessToken" component={Auth} />
      <Route path="/logout" component={Logout} />
    </BrowserRouter>
  );
}

export default Routes;