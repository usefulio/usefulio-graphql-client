import React, { Component } from "react";
import { Mutation } from "react-apollo";

// Material UI imports.
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

// GraphQL queries.
import updateSessionMutation from "../graphql/updateSession";

// Utilities.
import signIn from "../utils/signIn";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    paddingRight: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * 3,
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
    const { classes } = this.props;
    return (
      <Mutation mutation={updateSessionMutation}>
        {updateSession => (
          <div className={classes.root}>
            <form
              className={classes.form}
              onSubmit={async event => {
                event.preventDefault();
                const { email, password } = this.state;
                try {
                  if (await signIn({ email, password })) {
                    window.location.replace("/");
                    // await updateSession({ variables: { signedIn: true } });
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
          </div>
        )}
      </Mutation>
    );
  }
}

export default withStyles(styles)(SignIn);
