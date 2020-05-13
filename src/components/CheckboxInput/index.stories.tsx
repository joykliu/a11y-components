import React from "react";
import { storiesOf } from "@storybook/react";
import { Form } from "informed";
import General from "./readme.md";

import CheckboxInput from ".";

const stories = storiesOf("Atoms|Checkbox Input", module);

stories.add(
  "CheckboxInput",
  () => (
    <Form style={{ padding: "100px" }}>
      <CheckboxInput
        field="checkboxField"
        option={{ label: "Check this box", id: "checkboxItem" }}
      />
    </Form>
  ),
  { General }
);
