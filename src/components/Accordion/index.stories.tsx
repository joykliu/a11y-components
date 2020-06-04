import React from "react";
import { storiesOf } from "@storybook/react";
import shortid from "shortid";

import Accordion from ".";

import General from "./readme.md";

const stories = storiesOf("Molecules|Accordion", module);

const accordionItems = [
  {
    title: "Can I have more than 1 application in process at once?",
    description:
      "Yes, you can view all your applications using the “My Applications” Tab in the upper left hand corner of the screen. Clicking here allows you to view all your submitted and in process applications.",
    id: shortid.generate()
  },
  {
    title: "I already applied last year, do I have to apply again this year?",
    description: "Yes, we require a new application each year.",
    id: shortid.generate()
  },
  {
    title: "How do I submit an application?",
    description:
      "Once you have completed all four sections of the application and uploaded all required documents, please click on the “Final Review and Submit” button. You will be requested to review the application and can submit. Please note, once you submit you CANNOT go back and make changes to the application",
    id: shortid.generate()
  }
];

stories.add("Default", () => <Accordion accordionItems={accordionItems} />, {
  notes: { General }
});
