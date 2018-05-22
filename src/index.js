import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import client from "./client";
// import registerServiceWorker from "./registerServiceWorker";

// Custom components.
import App from "./components/App";
import Content from "./components/Content";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./components/SignIn";
import Users from "./components/Users";

import "./index.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App>
        <Header />
        <Content>
          <PrivateRoute exact path="/" component={Users} />
          <Route path="/login" component={SignIn} />
        </Content>
      </App>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
// registerServiceWorker();
