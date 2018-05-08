import React, { Component } from "react";

import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    width: 200
  }
});

class Loading extends Component {
  render() {
    const { classes } = this.props;
    return <Typography className={classes.root}>Loading...</Typography>;
  }
}

export default withStyles(styles)(Loading);
