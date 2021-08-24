import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Projects from "./Projects/Projects";
import About from "./About/About";
import NotFound from "./NotFound/NotFound";

const Main = () => {
  return (
    <main className="Main">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Redirect from="/" to="/projects" />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
