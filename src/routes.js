import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Auth from './pages/Auth';

function Routes() {
  return(
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/dev/:id" component={Main} />
      <Route path="/auth/:accessToken" component={Auth} />
    </BrowserRouter>
  );
}

export default Routes;