import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './providers';
import './styles/tailwind.css';
import App from './App';
import { ErrorBoundary } from './components/error-boundary';

function Main() {
  return (
    <ErrorBoundary>
      <Provider>
        <App />
      </Provider>
    </ErrorBoundary>
  );
}
ReactDOM.render(<Main />, document.getElementById('root'));
