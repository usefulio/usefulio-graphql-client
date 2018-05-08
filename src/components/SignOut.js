import React, { Component } from "react";

import Button from "material-ui/Button";
import { Mutation } from "react-apollo";
import signOut from "../utils/signOut";
import updateSignedInMutation from "../graphql/updateSignedIn";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 200
  }
});

class SignOut extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Mutation mutation={updateSignedInMutation}>
        {updateSignedIn => (
          <Button
            type="submit"
            variant="raised"
            color="primary"
            className={classes.button}
            onClick={async () => {
              if (signOut()) {
                // await updateSignedIn({ variables: { signedIn: false } });
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

export default withStyles(styles)(SignOut);
