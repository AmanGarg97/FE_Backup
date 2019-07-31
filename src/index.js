import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />

import {BrowserRouter , Route} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')

// );
ReactDOM.render((
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>
), document.getElementById('root'))