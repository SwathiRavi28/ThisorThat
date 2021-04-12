import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App.js';
import Login from './screens/login.js';
import Register from './screens/register.js';
import Main from './screens/main.js';
import Check from './screens/check.js'
import Similar from './screens/similar'


import 'react-toastify/dist/ReactToastify.css';
import Similarity from './screens/similar.js';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact render={props => <App {...props} />} />
      <Route path='/login' exact render={props => <Login {...props} />} />
      <Route path='/register' exact render={props => <Register {...props} />} />
      <Route path='/main' exact render={props => <Main {...props} />} />
      <Route path='/check' exact render={props => <Check {...props} />} />
      <Route path='/similarity' exact render={props => <Similar {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
