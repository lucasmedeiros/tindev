import React, { useLayoutEffect } from 'react';
import logo from '../assets/logo.svg';
import { getFromStorage, ifVal } from '../util/Util';
import './Login.css';

const TOKEN_STORAGE_KEY = 'main_app_token';

function Login({ history }) {
  // const [username, setUsername] = useState('');
  // const [signedIn, setSignedIn] = useState(false);
  // const [token, setToken] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const response = await api.post('/devs', {
  //     username,
  //   });

  //   const { _id } = response.data;

  //   history.push(`/dev/${_id}`);
  // }

  useLayoutEffect(() => {
    const token = getFromStorage(TOKEN_STORAGE_KEY);
    ifVal(token, (nonNullToken) => {
      history.push(`/auth/${nonNullToken}`);
    });
  }, []);

  return (
    <section className="login-container">
      <article className="login-center">
        <img src={logo} alt="Logo da Tindev"/>
        <a href="http://localhost:3333/auth/login">Logar com GITHUB!</a>
      </article>
    </section>
  );
}

export default Login;