import React from "react";
import RadioGroup from "../RadioGroup";

import isRequired from "../../validators/isRequired";

import styles from "./index.module.css";

const options = [
  {
    label: "yes",
    value: "yes",
    id: "yes"
  },
  { label: "no", value: "no", id: "no" }
];

type PropsType = {
  step?: number;
};

const SpiceStep = ({ step }: PropsType) => {
  return (
    <>
      <h2 className={styles.spiceStepHeading}>
        <span role="img" aria-label="chilli pepper">
          🌶
        </span>
      </h2>
      <RadioGroup
        step={step}
        keepState
        field="spice"
        options={options}
        label="Would you like it spicy?"
        validate={isRequired("Please select an option.")}
      />
    </>
  );
};

export default SpiceStep;
