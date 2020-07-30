import React, { useEffect, useState } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Container from "../../components/container/Container";
import UsersListTable from "../../components/table/UsersListTable";
import ReturnButton from "../../components/buttons/ReturnButton";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 650,
    maxHeight: 475,
    margin: theme.spacing(10),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& .MuiCardHeader-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row-reverse",
      padding: 0,
      paddingTop: "16px",
      width: "100%",
      "& .MuiCardHeader-action": {
        margin: 0,
      },
    },
    "& .MuiCardContent-root": {
      overflow: "auto",
    },
  }
}));

export default function UsersList() {
  const [users, setUsers] = useState();
  const classes = useStyles();

  useEffect(() => {
    Axios.get("https://reqres.in/api/users").then(({ data }) => {
      setUsers(data);
    });

    return () => {};
  }, []);

  return (
    <Container isLoading={!users}>
      <Card className={classes.root}>
        <CardHeader
          action={<ReturnButton to="/" />}
          title="Lista de usuários"
        />
        <CardContent>
          <UsersListTable users={users} />
        </CardContent>
      </Card>
    </Container>
  );
}
