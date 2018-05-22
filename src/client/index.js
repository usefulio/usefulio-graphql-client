import { ApolloClient } from "apollo-client";
import { ApolloLink, Observable } from "apollo-link";
import { BatchHttpLink } from "apollo-link-batch-http";
import { onError } from "apollo-link-error";
import { withClientState } from "apollo-link-state";

import cache from "./cache";
import defaults from "./defaultState";
import resolvers from "./resolvers";
import typeDefs from "./types";
import { graphQLUrl } from "../config";

const errorLink = onError(({ response, graphQLErrors, networkError }) => {
  if (response) {
    response.errors = null;
  }
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const request = async operation => {
  const token = localStorage.getItem("token");
  if (token) {
    operation.setContext({ headers: { Authorization: `Bearer ${token}` } });
  }
};

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle;
      Promise.resolve(operation)
        .then(operation => request(operation))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
          });
        })
        .catch(observer.error.bind(observer));
      return () => {
        if (handle) {
          handle.unsubscribe();
        }
      };
    })
);

const clientStateLink = withClientState({
  cache,
  defaults,
  resolvers,
  typeDefs
});

const httpLink = new BatchHttpLink({ uri: graphQLUrl });

export default new ApolloClient({
  link: ApolloLink.from([errorLink, requestLink, clientStateLink, httpLink]),
  cache
});
