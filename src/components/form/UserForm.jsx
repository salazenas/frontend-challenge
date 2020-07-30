import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  isFirstNameValid,
  isLastNameValid,
  isEmailValid,
} from "../../modules/helpers/FormHelper";

export default function UserForm({ classes, user, setUser }) {
  return (
    <form className={classes.form} noValidate autoComplete="on">
      <TextField
        disabled
        id="id"
        label="ID"
        defaultValue={user.id}
        variant="outlined"
      />
      <TextField
        id="first_name"
        label="Nome"
        value={user.first_name}
        variant="outlined"
        onChange={({ target }) =>
          setUser({ ...user, first_name: target.value })
        }
        error={!isFirstNameValid(user.first_name)}
        helperText={!isFirstNameValid(user.first_name) && "Nome inválido"}
      />
      <TextField
        id="last_name"
        label="Sobrenome"
        value={user.last_name}
        variant="outlined"
        onChange={({ target }) => setUser({ ...user, last_name: target.value })}
        error={!isLastNameValid(user.last_name)}
        helperText={!isLastNameValid(user.last_name) && "Sobrenome inválido"}
      />
      <TextField
        id="email"
        label="E-mail"
        type="email"
        value={user.email}
        variant="outlined"
        onChange={({ target }) => setUser({ ...user, email: target.value })}
        error={!isEmailValid(user.email)}
        helperText={!isEmailValid(user.email) && "E-mail inválido"}
      />
    </form>
  );
}
