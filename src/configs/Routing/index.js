import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import EventForm from "pages/EventForm";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/event-form" component={EventForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
