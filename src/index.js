import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reduxActionGenerate from 'redux-action-generate';
import storage from 'redux-persist/lib/storage';

import { Routes } from './containers';
import { reducers } from './reducers';

// receives error as an argument
function commonCatchFunc(err) {
  if (err.response.status === 401) {
    // logout();
  }
}

// receives store where you can get 'store.getState().token' to insert it in each request
// must return an object
function apiCallCustomHeaders(store) {
  let headers = {
    'Content-Type': 'application/json',
  };
  return headers;
}

// common config for redux-persist - to save info locally - is not required
const persistConfig = {
  key: 'root',
  whitelist: ['auth'],
  storage,
};

export const { store, persistor, A } = reduxActionGenerate({
  reducers,
  apiCallCustomHeaders,
  commonCatchFunc,
  persistConfig,
});

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
