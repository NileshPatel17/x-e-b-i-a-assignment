import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function NoMatch() {
  let location = useLocation();
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
      <span>
        <Link to="/">Home</Link>
      </span>
    </div>
  );
}
