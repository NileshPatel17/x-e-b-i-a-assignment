import React from 'react';
import { Link } from 'react-router-dom';

export function Planet({ planet }) {
  const id = planet.url.split('/')[5];
  return (
    <Link to={`/planets/${id}`}>
      <div className="rounded border h-30 w-40 m-2 p-2 text-center justify-center bg-gray-200">
        <h2 className="text-gray-900">{planet.name}</h2>
      </div>
    </Link>
  );
}
