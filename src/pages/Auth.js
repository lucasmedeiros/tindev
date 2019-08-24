import React, { useLayoutEffect } from 'react';
import api from '../services/api';
import { setInStorage } from '../util/Util';

const USER_ID_STORAGE_KEY = 'user_id';

function Auth({ history, match }) {

  useLayoutEffect(() => {
    async function fetchDataFromAPI() {
      const token = match.params.accessToken;
      const data = {token};

      try {
        const response = await api.post('/devs', data);

        const { _id } = response.data;

        setInStorage(USER_ID_STORAGE_KEY, _id);
        history.push(`/dev/${_id}`);
      } catch (err) {
        history.push('/');
      }
    }

    fetchDataFromAPI();
  }, [match.params.accessToken]);
  
  return(<div />);
}

export default Auth;