import React from "react";
import { storiesOf } from "@storybook/react";
import { Form } from "informed";

import DatePicker from ".";

import General from "./readme.md";

const stories = storiesOf("Atoms|Date Picker", module);

stories.add(
  "Default",
  () => (
    <div style={{ padding: "100px" }}>
      <Form>
        <DatePicker label="Date" field="date" isRequired />
      </Form>
    </div>
  ),
  {
    notes: { General }
  }
);
