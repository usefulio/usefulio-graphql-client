import React, { Component } from "react";
import { Mutation } from "react-apollo";

// Material UI imports.
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// GraphQL queries.
import updateSessionMutation from "../graphql/updateSession";

// Utilities.
import signOut from "../utils/signOut";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 200
  }
});

class SignOutButton extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Mutation mutation={updateSessionMutation}>
        {updateSession => (
          <Button
            type="submit"
            color="inherit"
            className={classes.button}
            onClick={async () => {
              if (signOut()) {
                window.location.replace("/");
                // await updateSession({ variables: { signedIn: false } });
              }
            }}
          >
            Sign Out
          </Button>
        )}
      </Mutation>
    );
  }
}

export default withStyles(styles)(SignOutButton);
