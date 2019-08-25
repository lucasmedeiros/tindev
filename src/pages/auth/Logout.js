import React, {useEffect} from 'react';
import { removeFromStorage } from '../../util/Util';

const USER_STORAGE_KEY = 'tindev_user';

function Logout({ history }) {

  useEffect(() => {
    removeFromStorage(USER_STORAGE_KEY);
    history.push('/');
  });

  return(<div />);
}

export default Logout;