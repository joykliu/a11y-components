import React from "react";
import CheckboxGroup from "../CheckboxGroup";

import styles from "./index.module.css";

const options = [
  {
    label: "Egg",
    id: "tamago"
  },
  {
    label: "Seaweed",
    id: "nori"
  },
  {
    label: "Pork",
    id: "chashu"
  }
];

type PropsType = {
  step?: number;
};

const ToppingStep = ({ step }: PropsType) => {
  return (
    <>
      <h2 className={styles.toppingStepHeading}>
        <span role="img" aria-label="egg">
          🥚
        </span>
      </h2>
      <CheckboxGroup
        options={options}
        step={step}
        keepState
        label="What topping would you like?"
        subtitle="Select all that apply"
        field="toppings"
      />
    </>
  );
};

export default ToppingStep;
