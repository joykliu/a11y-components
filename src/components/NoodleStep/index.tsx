import React from "react";
import RadioGroup from "../RadioGroup";

import isRequired from "../../validators/isRequired";

import styles from "./index.module.css";

const options = [
  {
    label: "thin",
    value: "thin",
    id: "thin"
  },
  { label: "thick", value: "thick", id: "thick" }
];

type PropsType = {
  step?: number;
};

const NoodleStep = ({ step }: PropsType) => {
  return (
    <>
      <h2 className={styles.noodleStepHeading}>
        <span role="img" aria-label="noodle">
          🍜
        </span>
      </h2>
      <RadioGroup
        keepState
        step={step}
        field="noodle"
        options={options}
        label="Which kind of noodle would you like?"
        validate={isRequired("Please select an option.")}
      />
    </>
  );
};

export default NoodleStep;
