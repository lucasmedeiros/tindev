import React from 'react';
import { Link } from 'react-router-dom';

function ListItems({ className }) {
  return(
    <div className={className}>
      <ul>
        <li>
          <Link to="/tindev/matches">Matches</Link>
        </li>
        <li>
          <Link to="/tindev/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default ListItems;