import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Fab from "@material-ui/core/Fab";

export default function AccessButton() {
  return (
    <Link to="users">
      <IconButton></IconButton>
      <Fab variant="extended">
        Acessar
        <ExitToAppIcon color="action" />
      </Fab>
    </Link>
  );
}
