import React from "react";
import { storiesOf } from "@storybook/react";
import Button from ".";

import General from "./readme.md";

const stories = storiesOf("Atoms|Button", module);

stories
  .add("Primary", () => (
    <div style={{ width: "300px", margin: "100px" }}>
      <Button onClick={() => {}} primary>
        Primary
      </Button>
    </div>
  ))
  .add(
    "Secondary",
    () => (
      <div style={{ width: "300px", margin: "100px" }}>
        <Button onClick={() => {}} secondary>
          Secondary
        </Button>
      </div>
    ),
    { notes: { General } }
  );
