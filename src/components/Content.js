import React, { Component } from "react";

// Material UI imports.
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing.unit * 3
  })
});

class Content extends Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.root}>{this.props.children}</div>;
  }
}

export default withStyles(styles)(Content);
