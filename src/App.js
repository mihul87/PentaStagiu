import React, { PureComponent } from 'react';
import './App.css';
import Login from './components/login';
import Playlist from './components/playlist';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
export default class App extends PureComponent {
  render() {
    return (
      <>
      <Router history={history}>
        <Switch>
        <Route
                exact
                path={"/"}
                render={props => (
                  <Login
                    {...props}
                  />
                )}
              />
              <Route
                exact
                path={"/playlist"}
                render={props => (
                  <Playlist
                    {...props}
                    />
                    )}
              />
        </Switch>
      </Router>
      </>
    );
  }
}
