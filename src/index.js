import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, Redirect} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './component/container/Home';
import Dashboard from './component/container/Dashboard';
import Store from './component/container/stores/Store';
import MarketingHome from './component/container/marketing/MarketingHome';

import injectTapEventPlugin from 'react-tap-event-plugin';
import StoresHome from "./component/container/stores/StoresHome";
import ProductsHome from "./component/container/warehouse/ProductsHome";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

import AuthService from "./services/AuthService";
const auth = new AuthService('Xsby13uXZrXqndMePb2uQaHT86SK99d9', 'alegmarra.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/' })
  }
};

const AppRouter = () => (
    <Router history={browserHistory}>
      <Route path="/" component={Home}/>

      <Route path="/users/:userId/dashboard" component={Dashboard} onEnter={requireAuth} />
      <Redirect from="/users/:userId/" to="/users/:userId/dashboard" />


      <Route path="/users/:userId/stores" component={StoresHome} onEnter={requireAuth} />
      <Route path="/users/:userId/stores/:storeId" component={Store} onEnter={requireAuth} />

      <Route path="/users/:userId/products" component={ProductsHome} onEnter={requireAuth} />

      <Route path="/users/:userId/marketing" component={MarketingHome} onEnter={requireAuth} />
      <Redirect from="/users/:userId/campaigns" to="/users/:userId/marketing" />
      <Redirect from="/users/:userId/ads" to="/users/:userId/marketing" />
    </Router>
);
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
      <AppRouter/>
    </MuiThemeProvider>,

    document.getElementById('root')
);
