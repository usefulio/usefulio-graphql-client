import "./index.css";

import { Route, BrowserRouter as Router } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";
import cache from "./cache";
import defaultState from "./defaultState";
import registerServiceWorker from "./registerServiceWorker";
import resolvers from "./resolvers";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  request: async operation => {
    const token = localStorage.getItem("token");
    if (token) {
      operation.setContext({ headers: { Authorization: `Bearer ${token}` } });
    }
  },
  clientState: {
    cache,
    defaults: defaultState,
    resolvers
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
