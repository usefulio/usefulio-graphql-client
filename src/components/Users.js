import React, { Component } from "react";
import { Query } from "react-apollo";

// Material UI components.
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";

// Custom components.
import Error from "./Error";
import Loading from "./Loading";

// GraphQL queries.
import usersQuery from "../graphql/users";

import "./App.css";

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 3
  }
});

class Users extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Query query={usersQuery}>
          {({ loading, error, data }) => {
            if (loading) {
              return <Loading />;
            }
            if (error) {
              return <Error>{error.message}</Error>;
            }
            return (
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>E-mail</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.users.map(user => {
                    return (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.firstName}</TableCell>
                        <TableCell>{user.lastName}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default withStyles(styles)(Users);
