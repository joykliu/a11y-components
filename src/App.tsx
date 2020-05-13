import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import RamenOnboarding from "./components/RamenOnboarding";
import "./App.css";

const steps = [
  {
    path: "/order/name",
    title: "What is your name?"
  },
  {
    path: "/order/noodle",
    title: "What kind of noodle would you like?"
  },
  {
    path: "/order/toppings",
    title: "Please select toppings"
  },
  {
    path: "/order/spice",
    title: "Spicy?"
  }
];
function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" component={RamenOnboarding} />
        {steps.map((step) => (
          <Route
            path={step.path}
            exact
            component={RamenOnboarding}
            key={step.path}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
