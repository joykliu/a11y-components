import React from "react";
import { storiesOf } from "@storybook/react";
import ToolTip from ".";

import General from "./readme.md";

const stories = storiesOf("Atoms|Tool Tip", module);

stories.add(
  "As Toggle Tooltip",
  () => <ToolTip content="This clarifies whatever needs clarifying" />,
  {
    notes: { General }
  }
);
