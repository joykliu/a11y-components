import React from "react";
import { storiesOf } from "@storybook/react";
import { Form } from "informed";

import RangeInput from ".";

import General from "./readme.md";

const stories = storiesOf("Atoms|Range Input", module);

stories.add(
  "Default",
  () => (
    <Form style={{ padding: "100px" }}>
      <RangeInput
        min={0}
        max={500}
        id="hsaSlider"
        step={10}
        field="hsaSlider"
        label="HSA Amount"
      />
    </Form>
  ),
  { notes: { General } }
);
