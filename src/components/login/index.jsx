import React, { useState, useContext } from 'react';
import { authenticate } from '../../utils';
import { useHistory } from 'react-router-dom';
import { AppStateContext } from '../../providers';

export function Login() {
  const history = useHistory();
  const {dispatch} = useContext(AppStateContext);
  const [userName, setUserName] = useState('Luke Skywalker');
  const [password, setPassword] = useState('19BBY');
  const [errorMessage, setErrorMessage] = useState('');
  const onLogin = async () => {
    setErrorMessage('Authentication in progress...');
    const isAuthenticated = await authenticate(userName, password);
    if (isAuthenticated) {
      dispatch({type:'LOGIN_SUCCESS',userName});
      history.push('/');
    } else {
      setErrorMessage('Invalid User or Password');
    }
  };
  const onChange = event => {
    setErrorMessage('')
    if (event.target.name === 'userName') {
      setUserName(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };
  return (
    <section className="bg-grey-lighter h-screen">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-1/3">
          <h2 className="mb-1 mt-1 text-center">Login</h2>
          <div className="border-teal p-8 border-t-4 bg-white mb-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="userName" className="pr-10">
                User Name
              </label>
              <input className="input__textbox" value={userName} onChange={onChange} placeholder="User Name" name="userName" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="pr-10">
                Password
              </label>
              <input className="input__textbox" value={password} onChange={onChange} placeholder="Password" type="password" name="password" />
            </div>
            <div className="mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold pt-2 py-1 px-4 rounded" onClick={onLogin}>
                Login
              </button>
            </div>
            <div role="alert">
              <div className="py-1 text-red-700">
                <p>{errorMessage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
