import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";

export default function SaveButton({ disabled, onClick }) {
  return (
    <IconButton disabled={disabled}  aria-label="save changes" onClick={onClick}>
      <SaveIcon />
    </IconButton>
  );
}
