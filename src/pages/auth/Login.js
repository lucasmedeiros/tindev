import React, { useLayoutEffect } from 'react';
import logo from '../../assets/logo.svg';
import { ifVal } from '../../util/Util';
import './Login.css';
import { authService } from '../../services/authService';

function Login({ history }) {

  useLayoutEffect(() => {
    ifVal(authService.currentUserValue, (nonNullUser) => {
      history.push(`/dev`);
    });
  });

  return (
    <section className="login-container">
      <article className="login-center">
        <img src={logo} alt="Logo da Tindev"/>
        <a href="https://tindev-backend-lucasmedeiros.herokuapp.com/auth/login">Logar com GITHUB!</a>
      </article>
    </section>
  );
}

export default Login;