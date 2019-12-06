import React, { useEffect, useState } from 'react';
import { SearchBar } from '../search-bar';
import { Planet } from '../planet';
import { searchPlanets } from '../../utils';
import { useHistory } from 'react-router-dom';
import { useAppStateContext } from '../../providers';
import { Layout } from '../layout';

export function Home() {
  const history = useHistory();
  const { state, dispatch } = useAppStateContext();
  const { loginUserName, results } = state;
  useEffect(() => {
    if (!loginUserName) {
      history.push('/login');
    }
  });
  const [loading, setLoading] = useState(false);

  const onSearch = async searchText => {
    dispatch({ type: 'PLANET_SEARCH_RESULT', results: null });
    setLoading(true);
    const response = await searchPlanets(searchText);
    dispatch({ type: 'PLANET_SEARCH_TEXT', searchText });
    dispatch({ type: 'PLANET_SEARCH_RESULT', results: response.results });
    setLoading(false);
  };
  if (!loginUserName) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <SearchBar onSearch={onSearch} />
      {loading && <div className="text-gray-800">Loading...</div>}
      {!loading && results && results.length === 0 && <div className="__center__">No data found!</div>}
      <div className="flex flex-wrap align-middle">{results && results.map(planet => <Planet key={planet.name} planet={planet} />)}</div>
    </Layout>
  );
}
