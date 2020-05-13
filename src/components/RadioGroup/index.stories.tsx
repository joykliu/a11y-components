import React from "react";
import { storiesOf } from "@storybook/react";
import { Form } from "informed";

import RadioGroup from ".";

import General from "./readme.md";
import isRequired from "../../validators/isRequired";

const stories = storiesOf("Atoms|Radio Group", module);
const options = [
  {
    label: "Yes",
    value: "yes",
    id: "yes"
  },
  { label: "No", value: "no", id: "no" }
];
stories.add(
  "RadioGroup",
  () => (
    <Form style={{ padding: "100px" }}>
      <RadioGroup
        field="radioGroup"
        options={options}
        label="Are you human?"
        validate={isRequired("Please select an option.")}
      />
    </Form>
  ),
  { General }
);
