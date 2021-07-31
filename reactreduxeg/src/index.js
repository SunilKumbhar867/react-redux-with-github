import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store";
import { Provider } from "react-redux";

// store.subscribe(() => console.log(store.getState()));
/**
 * to pass data we need provider and the as a props we pass all the state to store.js
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
