import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Container from "../../components/container/Container";
import UserForm from "../../components/form/UserForm";
import UserAvatar from "../../components/avatar/UserAvatar";
import ReturnButton from "../../components/buttons/ReturnButton";
import UndoButton from "../../components/buttons/UndoButton";
import SaveButton from "../../components/buttons/SaveButton";
import SuccessAlert from "../../components/alert/SuccessAlert";
import ErrorAlert from "../../components/alert/ErrorAlert";
import { isUserValid } from "../../modules/helpers/FormHelper";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 650,
    margin: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    "& .MuiCardHeader-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row-reverse",
      padding: 0,
      paddingTop: "16px",
      width: "100%",
      "& .MuiCardHeader-title": {
        fontSize: "1.5rem",
      },
      "& .MuiCardHeader-action": {
        margin: 0,
      },
      "& .MuiCardHeader-avatar": {
        marginRight: "32px",
      },
    },
  },
  form: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  back: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& h3": {
      margin: theme.spacing(1),
    },
  },
}));

export default function UserEdit() {
  const [initialUser, setInitialUser] = useState();
  const [user, setUser] = useState();
  const [status, setStatus] = useState();
  const [isSaving, setIsSaving] = useState(false);
  const classes = useStyles();
  const { id } = useParams();

  const setUserCallback = useCallback((user) => {
    setStatus(null);
    setUser(user);
  }, []);

  const undoFormCallback = useCallback(() => {
    setUser(initialUser);
  }, [initialUser]);

  const saveUserCallback = useCallback(() => {
    setIsSaving(true);
    setStatus(null);

    Axios.put(`https://reqres.in/api/users/${id}`, user).then(({ status }) => {
      if (status === 200) {
        setInitialUser(user);
      }
      setIsSaving(false);
      setStatus(status);
    });
  }, [id, user]);

  const statusCallback = useCallback(() => {
    if (status) {
      if (status === 200) {
        return <SuccessAlert />;
      } else {
        return <ErrorAlert />;
      }
    } else {
      return null;
    }
  }, [status]);

  useEffect(() => {
    Axios.get(`https://reqres.in/api/users/${id}`).then(({ data }) => {
      setInitialUser(data.data);
    });
  }, [id]);

  useEffect(() => {
    if (initialUser) {
      setUser(initialUser);
    }
  }, [initialUser]);

  return (
    <Container isLoading={!user}>
      <Card className={classes.root}>
        <CardHeader
          avatar={<UserAvatar user={user} />}
          action={<ReturnButton className={classes.back} to="/users" />}
          title="Informações do usuário"
        />
        <CardContent>
          <UserForm classes={classes} user={user} setUser={setUserCallback} />
        </CardContent>
        <CardActions disableSpacing>
          <UndoButton
            disabled={user && user === initialUser}
            onClick={undoFormCallback}
          />
          <SaveButton
            disabled={
              (user && (user === initialUser || !isUserValid(user))) || isSaving
            }
            onClick={saveUserCallback}
          />
          {statusCallback()}
        </CardActions>
      </Card>
    </Container>
  );
}
