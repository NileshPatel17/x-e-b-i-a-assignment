import React, { useState } from 'react';
import { authenticate } from '../../utils';
import { useInputValue } from '../../hooks';
import { useHistory } from 'react-router-dom';
import { useAppStateContext } from '../../providers';

export function Login() {
  const history = useHistory();
  const { dispatch } = useAppStateContext();
  const userNameProps = useInputValue(''); // Luke Skywalker
  const { value: userName } = userNameProps; // 19BBY
  const passwordProps = useInputValue('');
  const { value: password } = passwordProps;
  const [errorMessage, setErrorMessage] = useState('');
  const onLogin = async () => {
    if (!userName || !password) {
      setErrorMessage('User Name or Password can not be blank!');
      return;
    }
    setErrorMessage('Authentication in progress...');
    const { isAuthenticated, error } = await authenticate(userName, password);
    if (error) {
      setErrorMessage(error);
      return;
    }
    if (isAuthenticated) {
      dispatch({ type: 'LOGIN_SUCCESS', userName });
      history.push('/');
    } else {
      setErrorMessage('Invalid User or Password');
    }
  };

  return (
    <section className="bg-grey-lighter h-screen">
      <div className="mx-auto h-full flex justify-center items-center">
        <div className="w-1/3">
          <h2 className="mb-1 mt-1 text-center text-3xl text-bold">Login</h2>
          <div className="border-teal p-8 border-t-4 bg-white mb-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="userName" className="pr-10 pb-1 block">
                User Name
              </label>
              <input data-test="input-username" className="input__textbox" {...userNameProps} placeholder="User Name" name="userName" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="pr-10 pb-1 block">
                Password
              </label>
              <input data-test="input-password" className="input__textbox" {...passwordProps} placeholder="Password" type="password" name="password" />
            </div>
            <div className="mb-4">
              <button data-test="btn-login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold pt-2 py-1 px-4 rounded" onClick={onLogin}>
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
