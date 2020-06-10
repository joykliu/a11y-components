import React from "react";
import { storiesOf } from "@storybook/react";
import { Form } from "informed";
import GoogleAutoComplete from ".";

import General from "./readme.md";

const stories = storiesOf("Atoms|Google Auto Complete", module);

stories.add(
  "Default",
  () => (
    <Form style={{ padding: "50px" }}>
      <GoogleAutoComplete label="Address" field="address" id="address-id" />
    </Form>
  ),
  { notes: { General } }
);
