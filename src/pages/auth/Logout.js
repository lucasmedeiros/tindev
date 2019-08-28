import React, {useEffect} from 'react';
import { authService } from '../../services/authService';

function Logout({ history }) {

  useEffect(() => {
    authService.logout();
    history.push('/');
  });

  return(<div />);
}

export default Logout;