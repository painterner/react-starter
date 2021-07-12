
import reportWebVitals from './reportWebVitals';

import "babel-polyfill";
import "whatwg-fetch";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, BrowserRouter } from "react-router-dom";

import routes from "./routes";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
// import "accessible-nprogress/dist/accessible-nprogress.min.css";
import store from "./store/store";


// Helper function that renders single route
const renderRoute = (route: any, props: any) => {
  window.scrollTo(0, 0); // Reset scroll to top
  return <route.component routeParams={props.match.params} />;
};

// Helper function that create all routes
const createRoutes = () =>
  routes.map((route) => (
    <Route
      exact={true}
      key={route.path}
      path={route.path}
      component={(props: any) => renderRoute(route, props)}
    />
  ));

ReactDOM.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <BrowserRouter>
        {createRoutes()}
        {/* <App></App> */}
      </BrowserRouter>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
