import React from 'react';
import './Backdrop.css';

function Backdrop({ click, shown }) {
  let classes = (shown) ? ['backdrop', 'open'] : ['drawer'];

  return(
    <div
      className={classes.join(' ')}
      onClick={click} >
    </div>
  );
}

export default Backdrop;