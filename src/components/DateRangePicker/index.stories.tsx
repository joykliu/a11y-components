import React from "react";
import { storiesOf } from "@storybook/react";
import DateRangePicker from ".";

import General from "./readme.md";

const stories = storiesOf("Atoms|Date Range Picker", module);

stories.add(
  "Default",
  () => <DateRangePicker startDateId="startDateId" endDateId="endDateId" />,
  { notes: { General } }
);
