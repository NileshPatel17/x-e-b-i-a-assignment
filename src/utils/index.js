import axios from 'axios';

const BASE_URL = 'https://swapi.co/api';

export async function searchPeople(name) {
  const response = await axios.get(`${BASE_URL}/people?search=${name}`);
  return {
    count: response.data.count,
    results: response.data.results
  };
}
export async function searchPlanets(name) {
  const response = await axios.get(`${BASE_URL}/planets?search=${name}`);
  return {
    count: response.data.count,
    results: response.data.results
  };
}
export async function authenticate(userName, password) {
  const response = await searchPeople(userName);
  const findExactUser = response.results.find(item => item.name.toLowerCase() === userName.toLowerCase());
  if (findExactUser) {
    // check password
    return findExactUser.birth_year === password ? true : false;
  }
  return false;
}
