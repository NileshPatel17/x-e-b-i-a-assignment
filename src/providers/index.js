import React, { useReducer, createContext,useContext } from 'react';

const AppStateContext = createContext(null);

export const useAppStateContext = () => useContext(AppStateContext);

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, loginUserName: action.userName };
    case 'LOGIN_OUT':
      return { ...state, loginUserName: '' };
    case 'PLANET_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    case 'PLANET_SEARCH_RESULT':
      return {
        ...state,
        results: action.results
      };
    default:
      return state;
  }
}
const initialState = {
  loginUserName: '',
  searchText: '',
  results: null
};
export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>;
}
