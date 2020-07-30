import React from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  edit: {
    opacity: 0,
    "&:hover": {
      opacity: 1,
    },
  },
}));

export default function EditButton({ id }) {
  const classes = useStyles();

  return (
    <Link className={classes.edit} to={`users/${id}`}>
      <IconButton aria-label="edit">
        <EditIcon />
      </IconButton>
    </Link>
  );
}
