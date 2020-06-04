import React from "react";
import { storiesOf } from "@storybook/react";
import TabMenu from ".";

import General from "./readme.md";

const stories = storiesOf("Molecules|Tab Menu", module);

const tabs = [
  {
    title: "Title 1",
    content: "content 1",
    id: "tab1"
  },
  {
    title: "Title 2",
    content: "content 2",
    id: "tab2"
  },
  {
    title: "Title 3",
    content: "content 3",
    id: "tab3"
  }
];

stories.add(
  "Default",
  () => (
    <div style={{ padding: "50px" }}>
      <TabMenu tabs={tabs} />
    </div>
  ),
  { notes: { General } }
);
