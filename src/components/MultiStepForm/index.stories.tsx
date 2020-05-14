import React from "react";
import { storiesOf } from "@storybook/react";
import { Form } from "informed";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";

import NameStep from "../NameStep";
import NoodleStep from "../NoodleStep";
import ToppingStep from "../ToppingStep";
import SpiceStep from "../SpiceStep";
import General from "./readme.md";

import MultiStepForm from ".";

const steps = [
  {
    path: "/name",
    title: "Name"
  },
  {
    path: "/noodle",
    title: "Noodle"
  },
  {
    path: "/toppings",
    title: "Toppings"
  },
  {
    path: "/spice",
    title: "Spice Level"
  }
];

const history = createMemoryHistory();

const stories = storiesOf("Organisms|Multi-step Form", module).addDecorator(
  (story) => (
    <Router history={history}>
      <Route path="/" component={() => story()} />
    </Router>
  )
);

stories.add(
  "Example ",
  () => (
    <Form>
      <MultiStepForm
        heading="Build Your Own Ramen"
        steps={steps}
        history={history}
      >
        <NameStep />
        <NoodleStep />
        <ToppingStep />
        <SpiceStep />
      </MultiStepForm>
    </Form>
  ),
  { notes: { General } }
);
