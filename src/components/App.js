import "./App.css";

import { Query, compose, graphql } from "react-apollo";
import React, { Component } from "react";

import SignIn from "./SignIn";
import Users from "./Users";
import authorizationQuery from "../graphql/authorization";

class App extends Component {
  render() {
    return localStorage.getItem("token") ? <Users /> : <SignIn />;
  }
}

export default compose(graphql(authorizationQuery))(App);
