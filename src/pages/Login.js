import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username);
  }

  return (
    <section className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Logo da Tindev"/>
        <input 
          name="user"
          autoComplete="off"
          placeholder="Digite seu nome de usuário no Github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Login;