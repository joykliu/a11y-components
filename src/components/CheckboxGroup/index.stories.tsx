import React from "react";
import { storiesOf } from "@storybook/react";
import { Form } from "informed";

import CheckboxGroup from ".";

import General from "./readme.md";

const stories = storiesOf("Molecules|Checkbox Group", module);

const options = [
  {
    label: "Pepperoni",
    id: "pepperoni"
  },
  {
    label: "Mushroom",
    id: "mushroom"
  },
  {
    label: "Banana Peppers",
    id: "bananaPeppers"
  }
];

stories.add(
  "Default",
  () => (
    <Form style={{ padding: "100px" }}>
      <CheckboxGroup
        options={options}
        label="What type of pizza toppings would you like?"
        subtitle="Select all that apply"
        field="pizzaToppings"
      />
    </Form>
  ),
  { notes: { General } }
);
