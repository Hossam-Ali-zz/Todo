import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "../components/Posts";
import Todo from "../components/Todo";

const PagesRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/todo" component={Todo} />
    </Switch>
  </BrowserRouter>
);

export default PagesRoutes;
