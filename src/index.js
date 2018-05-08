import "./index.css";

import { HttpLink, createHttpLink } from "apollo-link-http";

import ApolloClient from "apollo-boost";
import { ApolloLink } from "apollo-link";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";
import { InMemoryCache } from "apollo-cache-inmemory";
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import usersQuery from "./graphql/users";
import { withClientState } from "apollo-link-state";

const cache = new InMemoryCache();

// const defaultState = {
//   authorization: {
//     __typename: "Authorization",
//     token: null
//   }
// };

// const stateLink = withClientState({
//   cache,
//   defaults: defaultState,
//   resolvers: {
//     Mutation: {
//       updateToken: (_, { token }, { cache }) => {
//         // cache.writeData();
//       }
//     }
//   }
// });

// const customFetch = (uri, options) => {
//   console.log("-----------------------------------------");
//   console.log(uri, options);
//   console.log("-----------------------------------------");
//   options.headers.Authorization =
//     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNTI1MzQyNjY3LCJleHAiOjE1MjU3NzQ2Njd9.TBI-dn-A2q5oAMx5UlUQSFBfNZAhkEsGZnzNG3AmcXg";
//   return fetch(uri, options);
// };

// const customFetch = (uri, options) => {
//   console.log("-----------------------------------------");
//   console.log(uri, options);
//   console.log("-----------------------------------------");
//   return fetch(uri, options);
// };

const client = new ApolloClient({
  link: createHttpLink({ uri: "http://api.githunt.com/graphql" }),
  cache: new InMemoryCache()
});

// const client = new ApolloClient({
//   link: new HttpLink({ uri: "http://api.githunt.com/graphql" }),
//   cache: new InMemoryCache(),
//   // connectToDevTools: true
// });

// const client = new ApolloClient({
//   link: ApolloLink.from([
//     stateLink,
//     // new createHttpLink({
//     //   uri() {
//     //     console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
//     //     console.log(arguments);
//     //     // return "http://localhost:3000/graphql";
//     //   }
//     //   // fetch: customFetch
//     // })
//   ]),
//   cache
// });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
