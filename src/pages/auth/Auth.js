import React, { useEffect } from 'react';
import api from '../../services/api';
import { authService } from '../../services/authService';

function Auth({ history, match }) {

  useEffect(() => {
    async function fetchDataFromAPI() {
      const token = match.params.accessToken;
      const data = { token };

      try {
        const response = await api.post('/devs', data);
        authService.login(response.data);
        history.push(`/dev`);
      } catch (err) {
        console.log(err)
        history.push('/');
      }
    }

    fetchDataFromAPI();
  });
  
  return(<div />);
}

export default Auth;