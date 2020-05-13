import React from "react";
import { storiesOf } from "@storybook/react";
import { Form } from "informed";

import SelectInput from ".";
import isRequired from "../../validators/isRequired";

import General from "./readme.md";

const stories = storiesOf("Atoms|Select Input", module);

const options = [
  {
    label: "Option One",
    value: "option1",
    id: "option1"
  },
  {
    label: "Option Two",
    value: "option2",
    id: "option2"
  },
  {
    label: "Option Three",
    value: "option3",
    id: "option3"
  }
];

stories.add(
  "SelectInput",
  () => (
    <Form style={{ padding: "100px" }}>
      <SelectInput
        options={options}
        field="select"
        label="Select an option"
        validate={isRequired("This field is required.")}
      />
    </Form>
  ),
  { General }
);
