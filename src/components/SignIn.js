import { Mutation, compose } from "react-apollo";
import React, { Component } from "react";

import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Snackbar from "material-ui/Snackbar";
import TextField from "material-ui/TextField";
import signIn from "../utils/signIn";
import updateSignedInMutation from "../graphql/updateSignedIn";
import { withRouter } from "react-router-dom";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 200
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3
  }),
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class SignIn extends Component {
  state = {
    email: "john.smith@example.com",
    password: "password",
    hasError: false,
    error: ""
  };

  onChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  onSnackbarClose = () => {
    this.setState({
      hasError: false,
      error: ""
    });
  };

  render() {
    const { classes, history } = this.props;
    return (
      <Mutation mutation={updateSignedInMutation}>
        {updateSignedIn => (
          <Paper className={classes.root}>
            <form
              className={classes.form}
              onSubmit={async event => {
                event.preventDefault();
                const { email, password } = this.state;
                try {
                  if (await signIn({ email, password })) {
                    // history.push("/");
                    await updateSignedIn({ variables: { signedIn: true } });
                  }
                } catch (error) {
                  this.setState({
                    hasError: true,
                    error: error.message
                  });
                }
              }}
            >
              <TextField
                label="E-mail"
                className={classes.textField}
                value={this.state.email}
                onChange={this.onChange("email")}
              />
              <TextField
                type="password"
                label="Password"
                className={classes.textField}
                value={this.state.password}
                onChange={this.onChange("password")}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                variant="raised"
                color="primary"
                className={classes.button}
              >
                Sign In
              </Button>
            </form>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              open={this.state.hasError}
              onClose={this.onSnackbarClose}
              autoHideDuration={2000}
              message={this.state.error}
            />
          </Paper>
        )}
      </Mutation>
    );
  }
}

export default compose(withStyles(styles), withRouter)(SignIn);
