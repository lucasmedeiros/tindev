import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

function SideDrawer(props) {
  return(
    <nav className="drawer">
      <ul>
        <li>
          <Link to="/">Matches</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideDrawer;