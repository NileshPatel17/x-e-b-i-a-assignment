import React, { useEffect, useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { AppStateContext } from '../../providers';
import { Layout } from '../layout';

export function PlanetDetails() {
  const { state } = useContext(AppStateContext);
  const history = useHistory();
  const location = useLocation();
  const details = state.results ? state.results.find(item => item.url.indexOf('https://swapi.co/api' + location.pathname + '/') !== -1) : null;
  useEffect(() => {
    if (!state.loginUserName) {
      history.push('/login');
    }
  });
  return (
   <Layout>
      <div className="m-10">
      {details && (
        <div class="max-w-sm rounded mb-2 p-4 shadow-lg">
          <div className="flex flex-col rounded">
            <h1 className="uppercase text-2xl text-indigo-600">{details.name}</h1>
            <div>Population: {details.population}</div>
            <div>terrain: {details.terrain}</div>
            <div>climate: {details.climate}</div>
            <div>created: {details.created}</div>
          </div>
        </div>
      )}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={() => history.push('/')}>
        Back
      </button>
    </div>
   </Layout>
  );
}
