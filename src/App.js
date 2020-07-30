import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./containers/home/Home";
import UserEdit from "./containers/useredit/UserEdit";
import UsersList from "./containers/userslist/UsersList";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/users">
          <UsersList />
        </Route>
        <Route path="/users/:id">
          <UserEdit />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}