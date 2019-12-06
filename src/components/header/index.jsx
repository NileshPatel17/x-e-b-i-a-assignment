import React from 'react';
import { useAppStateContext } from '../../providers';

export function Header() {
  const { state, dispatch } = useAppStateContext();
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">The Star WARS</span>
      </div>
      <div className="w-full block flex flex-row-reverse lg:items-center lg:w-auto">
        <span>
          <span className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4">{state.loginUserName}</span>
        </span>
        <span>
          <a className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" onClick={() => dispatch({ type: 'LOGIN_OUT' })}>
            Logout
          </a>
        </span>
      </div>
    </nav>
  );
}
