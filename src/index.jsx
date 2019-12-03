import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './providers';
import './styles/tailwind.css';
import App from './App';

function Main() {
  return (
    <Provider>
      <App />
    </Provider>
  );
}
ReactDOM.render(<Main />, document.getElementById('root'));
