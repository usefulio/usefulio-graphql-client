import React, { Component } from "react";

// Material UI imports.
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

class Loading extends Component {
  render() {
    const { classes } = this.props;
    return <Typography className={classes.root}>Loading...</Typography>;
  }
}

export default withStyles(styles)(Loading);
