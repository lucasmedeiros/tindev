import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import logo from '../../assets/logo.svg';
import './Toolbar.css';
import ListItems from '../ListItems/ListItems';

function Toolbar({ drawerClickHandler }) {
  
  return(
    <header className="toolbar">
      <nav>
        <div className="toolbar-toggle-button">
          <DrawerToggleButton
            click={drawerClickHandler} />
        </div>
        <div className="toolbar-logo">
          <Link to="/">
            <img 
            src={logo}
            alt="Tindev" />
          </Link>
        </div>
        <div className="spacer" />
        <ListItems
          className='toolbar-items' />
      </nav>
    </header>
  );
}

export default Toolbar;