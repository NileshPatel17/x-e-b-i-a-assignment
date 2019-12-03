import React, { useContext } from 'react';
import { AppStateContext } from '../../providers';

const debounce = (func, delay) => {
  let debounceTimer;
  return function(...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

export function SearchBar({ onSearch }) {
  const {state}=useContext(AppStateContext)
  const [input, setInput] = React.useState(state.searchText);
  const delayQuery = React.useRef(
    debounce(value => {
      onSearch(value);
    }, 400)
  ).current;
  const OnChange = event => {
    event.persist();
    setInput(event.target.value);
    delayQuery(event.target.value);
  };
  return (
    <div className='ml-2 mt-2'>
      <span>
        <input value={input} placeholder="search planet" onChange={OnChange} className='input__textbox__search' />
      </span>
    </div>
  );
}
