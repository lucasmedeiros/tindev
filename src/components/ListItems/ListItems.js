import React from 'react';
import { Link } from 'react-router-dom';

function ListItems({ className }) {
  return(
    <div className={className}>
      <ul>
        <li>
          <Link to="/matches">Matches</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default ListItems;