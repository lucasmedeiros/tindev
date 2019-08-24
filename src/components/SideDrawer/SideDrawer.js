import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

function SideDrawer({ shown }) {
  let classes = (shown) ? ['drawer', 'open'] : ['drawer'];

  return(
    <nav className={classes.join(' ')}>
      <ul>
        <li>
          <Link to="/">Matches</Link>
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideDrawer;