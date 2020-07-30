import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SuccessAlert() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const closeAlertCallback = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          action={
            <React.Fragment>
              <Button
                color="inherit"
                size="small"
                onClick={() =>
                  closeAlertCallback() &&
                  console.log("Backend reverteria a alteração")
                }
              >
                DESFAZER
              </Button>
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={closeAlertCallback}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </React.Fragment>
          }
        >
          Informações salvas com sucesso!
        </Alert>
      </Collapse>
    </div>
  );
}
