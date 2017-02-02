import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Main from './Main'
import Catalog from './components/Menu/Catalog';
import Home from './components/Menu/Home';
import News from './components/Menu/News';
import About from './components/Menu/About'
import Contact from './components/Menu/Contact'
import Sale from './components/Menu/Sale'
import All from './components/Products/All'

require('./css/material.min.css');
require('./css/style.css');
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

// import DATA from '../clients.json'
// <App data={DATA} />,

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="catalog" component={Catalog} >
        <Route path="catalog/:all" component={All} />
      </Route>
      <Route path="news" component={News} />
      <Route path="sale" component={Sale} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
    </Route>

  </Router>,


  document.getElementById('root')
);
