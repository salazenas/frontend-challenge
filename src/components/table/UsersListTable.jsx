import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import UserAvatar from "../avatar/UserAvatar";
import { makeStyles } from "@material-ui/core";
import EditButton from "../buttons/EditButton";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
}));

export default function UsersListTable(props) {
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="left">Nome</TableCell>
          <TableCell align="left">Sobrenome</TableCell>
          <TableCell align="left">E-mail</TableCell>
          <TableCell align="left">Avatar</TableCell>
          <TableCell align="left"></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.users.data.map((user) => (
          <TableRow key={user.id}>
            <TableCell component="th" scope="user">
              {user.id}
            </TableCell>
            <TableCell align="left">{user.first_name}</TableCell>
            <TableCell align="left">{user.last_name}</TableCell>
            <TableCell align="left">{user.email}</TableCell>
            <TableCell align="left">
              <UserAvatar user={user} />
            </TableCell>
            <TableCell align="left">
              <EditButton id={user.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
