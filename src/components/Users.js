import "./App.css";

import React, { Component } from "react";

import { Query } from "react-apollo";
import User from "./User";
import usersQuery from "../graphql/users";

class Users extends Component {
  render() {
    return (
      <Query query={usersQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return "Loading...";
          }
          if (error) {
            return `Error! ${error.message}`;
          }
          return data.users.map(user => {
            return <User key={user.id} user={user} />;
          });
        }}
      </Query>
    );
  }
}

export default Users;
