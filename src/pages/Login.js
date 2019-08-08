import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import api from '../services/api';
import './Login.css';

function Login({ history }) {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api.post('/devs', {
      username,
    });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
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