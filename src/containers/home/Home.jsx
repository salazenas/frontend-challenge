import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "../../components/container/Container";
import AccessButton from "../../components/buttons/AccessButton";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(10),
  },
  subtitle: {
    fontSize: 14,
  },
  actions: {
    "& a": {
      margin: theme.spacing(1),
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
    },
    "& svg": {
      marginLeft: "12px",
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Home
          </Typography>
          <Typography className={classes.subtitle} color="textSecondary">
            Bem vindo(a) ao gerenciador de contatos
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <AccessButton />
        </CardActions>
      </Card>
    </Container>
  );
}
