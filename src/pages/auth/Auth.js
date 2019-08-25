import React, { useEffect } from 'react';
import api from '../../services/api';
import { setInStorage } from '../../util/Util';

const USER_STORAGE_KEY = 'tindev_user';

function Auth({ history, match }) {

  useEffect(() => {
    async function fetchDataFromAPI() {
      const token = match.params.accessToken;
      const data = { token };

      try {
        const response = await api.post('/devs', data);

        const { _id } = response.data;

        setInStorage(USER_STORAGE_KEY, JSON.stringify(response.data));
        history.push(`/dev/${_id}`);
      } catch (err) {
        history.push('/');
      }
    }

    fetchDataFromAPI();
  });
  
  return(<div />);
}

export default Auth;