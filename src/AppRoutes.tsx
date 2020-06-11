import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history'
import RootComponent from "./components/RootComponent";
import { FirstComponentView } from "./components/firstComponent/firstComponentView";
import { SecondComponentView } from "./components/secondComponent/secondComponentView";

const history = createBrowserHistory()

const routes = [
  { path: "/", exact: true, component: RootComponent },
  { path: "/first", exact: false, component: FirstComponentView },
  { path: "/second", exact: false, component: SecondComponentView },
];

export default class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              exact={route.exact}
              path={route.path}
              children={<route.component />}
            />
          ))}
        </Switch>
      </Router>
    );
  }
}
