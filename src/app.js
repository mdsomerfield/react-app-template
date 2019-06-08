import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from '@redux/index';
import ApplicationBase from '@react/ApplicationBase';
import '@styles/global.scss';
import '@fonts/index.scss';

const initialState = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(reducers, initialState, enhancer);

const Wrapper = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ApplicationBase />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  (<Wrapper />), 
  document.getElementById('application-container')
);
