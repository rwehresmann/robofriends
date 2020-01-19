import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './containers/App';
import { requestRobots, searchRobots } from './reducers'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

const logger = createLogger()

const rootReduceres = combineReducers({ requestRobots, searchRobots })

const store = createStore(rootReduceres, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
