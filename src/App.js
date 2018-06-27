/* eslint react/no-did-mount-set-state: 0 */

// routes and header
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'; //function that goes in createStore

import logo from './logo.svg';
import './App.css';

import rootReducer from './rootReducer'

import MoviesList from './MoviesList';
import MovieDetail from './MovieDetail';
import Toggle from './Toggle'

// lil bebe reducer
//const hello = () => ('hello');

//store required to connect redux and react. 
const store = createStore(
  rootReducer,
  {}, //empty object for initial state
  composeWithDevTools()
);

const App = () => (
  // provider accepts props of store and the children. makes redux available to entire app via connect from react-redux
  <Provider store={ store }>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
