import React, { Component } from "react";

import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Snackbar from "material-ui/Snackbar";
import TextField from "material-ui/TextField";
import sha256 from "../utils/sha256";
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

  onSubmit = async event => {
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: sha256(this.state.password)
    };
    try {
      const response = await fetch("http://localhost:3000/loginWithPassword", {
        method: "POST",
        body: JSON.stringify(data)
      });
      if (response.status === 401) {
        this.setState({
          hasError: true,
          error: "Invalid e-mail or password"
        });
      } else if (response.status === 200) {
        const data = await response.json();
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  onSnackbarClose = () => {
    this.setState({
      hasError: false
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <form className={classes.form} onSubmit={this.onSubmit}>
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
    );
  }
}

export default withStyles(styles)(SignIn);
