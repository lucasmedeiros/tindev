import React, { useState } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';

function MainLayout({ children }) {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const handleDrawerToggleClick = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const handleBackdropClick = () => {
    setSideDrawerOpen(false);
  };

  return(
    <main>
      <Toolbar
        drawerClickHandler={handleDrawerToggleClick} />
      <SideDrawer
        shown={sideDrawerOpen} />
      <Backdrop 
        shown={sideDrawerOpen}
        click={handleBackdropClick} />
      {children}
    </main>
  );
}

export default MainLayout;