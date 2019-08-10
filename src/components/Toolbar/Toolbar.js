import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import logo from '../../assets/logo.svg';
import './Toolbar.css';

function Toolbar(props) {
  return(
    <header className="toolbar">
      <nav>
        <div>
          <DrawerToggleButton />
        </div>
        <div className="toolbar-logo">
          <Link to="/">
            <img 
            src={logo}
            alt="Tindev" />
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar-items">
          <ul>
            <li>
              <Link to="/">Matches</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;