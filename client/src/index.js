import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import alertOptions from './config/alertOptions';
import App from './App';
import { store } from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <App />
      </AlertProvider>
    </Provider>  
  </React.StrictMode>,
  document.getElementById('root')
);