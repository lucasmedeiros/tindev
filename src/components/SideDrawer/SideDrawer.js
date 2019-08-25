import React from 'react';
import './SideDrawer.css';
import ListItems from '../ListItems/ListItems';

function SideDrawer({ shown }) {
  let classes = (shown) ? ['drawer', 'open'] : ['drawer'];
  return(
    <nav className={classes.join(' ')}>
      <ListItems />
    </nav>
  );
}

export default SideDrawer;