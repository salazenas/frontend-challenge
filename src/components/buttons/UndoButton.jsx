import React from "react";
import IconButton from "@material-ui/core/IconButton";
import UndoIcon from "@material-ui/icons/Undo";

export default function UndoButton({ disabled, onClick }) {
  return (
    <IconButton disabled={disabled} aria-label="undo changes" onClick={onClick}>
      <UndoIcon />
    </IconButton>
  );
}
