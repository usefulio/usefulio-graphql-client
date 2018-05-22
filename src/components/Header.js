import React, { Component } from "react";
import { Query } from "react-apollo";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

// Custom components.
import Error from "./Error";
import Loading from "./Loading";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

// GraphQL queries.
import sessionQuery from "../graphql/session";

const styles = theme => ({
  title: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Query query={sessionQuery}>
        {({ loading, error, data }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return <Error>{error.message}</Error>;
          }
          return (
            <AppBar position="static">
              <Toolbar>
                <Typography
                  variant="title"
                  color="inherit"
                  className={classes.title}
                >
                  GraphQL Client
                </Typography>
                {data.session.signedIn ? <SignOutButton /> : <SignInButton />}
              </Toolbar>
            </AppBar>
          );
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(Header);
