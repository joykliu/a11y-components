import React from "react";
import { storiesOf } from "@storybook/react";
import Table from ".";

import General from "./readme.md";

const stories = storiesOf("Atoms|Table", module);

const headers = [
  "transaction id",
  "sending",
  "recipient",
  "payment method",
  "cost",
  "status"
];

const rows = [
  ["001", "$100 CAD", "Joy L", "Credit Card", "$70 USD", "sent"],
  ["002", "$100 CAD", "Ris W", "Debit Card", "$70 USD", "pending"],
  ["003", "$100 CAD", "Dan R", "Wire", "$70 USD", "cancelled"],
  ["004", "$100 CAD", "Omid F", "Credit Card", "$70 USD", "pending"]
];

stories
  .add(
    "Desktop",
    () => (
      <Table.Desktop
        caption="transaction history"
        headers={headers}
        rows={rows}
      />
    ),
    {
      notes: { General }
    }
  )
  .add(
    "Mobile",
    () => (
      <Table.Mobile
        caption="transaction history"
        headers={headers}
        rows={rows}
      />
    ),
    {
      notes: { General }
    }
  );
