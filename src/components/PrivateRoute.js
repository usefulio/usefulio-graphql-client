import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { Query } from "react-apollo";

// GraphQL queries.
import sessionQuery from "../graphql/session";

class PrivateRoute extends Component {
  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Query query={sessionQuery}>
        {({ data }) => {
          return (
            <Route
              {...rest}
              render={props => {
                return data.session.signedIn ? (
                  <Component {...props} />
                ) : (
                  <Redirect
                    to={{ pathname: "/login", state: { from: props.location } }}
                  />
                );
              }}
            />
          );
        }}
      </Query>
    );
  }
}

export default PrivateRoute;
