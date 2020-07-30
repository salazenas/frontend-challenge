import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

export default function ReturnButton({ to }) {
  return (
    <Link to={to}>
      <IconButton aria-label="back">
        <ArrowBackIcon />
      </IconButton>
    </Link>
  );
}
