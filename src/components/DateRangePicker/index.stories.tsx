import React from "react";
import { storiesOf } from "@storybook/react";
import DateRangePicker from ".";

import General from "./readme.md";

const stories = storiesOf("Atoms|Date Range Picker", module);

stories.add(
  "Default",
  () => (
    <div style={{ padding: "100px" }}>
      <DateRangePicker
        startDateId="startDateId"
        endDateId="endDateId"
        label="Please select a start date and an end date."
      />
    </div>
  ),
  { notes: { General } }
);
