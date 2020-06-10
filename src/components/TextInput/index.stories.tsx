import React from "react";
import { storiesOf } from "@storybook/react";
import { Form } from "informed";

import TextInput from ".";
import isRequired from "../../validators/isRequired";

const stories = storiesOf("Atoms|TextInput", module);

stories.add("TextInput", () => (
  <Form style={{ padding: "100px" }}>
    <TextInput
      field="name"
      id="unique-id"
      label="Name"
      validate={isRequired("This field is required.")}
    />
  </Form>
));
