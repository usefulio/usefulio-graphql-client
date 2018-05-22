import React, { Component } from "react";
import { compose } from "react-apollo";
import { withRouter } from "react-router-dom";

// Material UI imports.
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 200
  }
});

class SignInButton extends Component {
  onClick = () => {
    const { history } = this.props;
    history.push("/login");
  };

  render() {
    const { classes } = this.props;
    return (
      <Button
        type="submit"
        color="inherit"
        className={classes.button}
        onClick={this.onClick}
      >
        Sign In
      </Button>
    );
  }
}

export default compose([withStyles(styles), withRouter])(SignInButton);
