import "./App.css";

import React, { Component } from "react";

import Loading from "./Loading";
import { Query } from "react-apollo";
import SignIn from "./SignIn";
import Users from "./Users";
import signedInQuery from "../graphql/signedIn";

class App extends Component {
  render() {
    return (
      <Query query={signedInQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return `Error! ${error.message}`;
          }
          return data.signedIn ? <Users /> : <SignIn />;
        }}
      </Query>
    );
  }
}

export default App;
