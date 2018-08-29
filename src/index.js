import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Index';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import { DefaultLayout } from "./pages/Layout";

ReactDOM.render(
  <Router>
    <Switch>
        <DefaultLayout exact path="/" component={Index} />
    </Switch>
  </Router>,
document.getElementById('root'));

registerServiceWorker();
