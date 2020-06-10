import React from "react";
import TextInput from "../TextInput";

import isRequired from "../../validators/isRequired";

import styles from "./index.module.css";

type PropsType = {
  step?: number;
};

const NameStep = ({ step }: PropsType) => {
  return (
    <>
      <h2 className={styles.nameStepHeading}>
        <span role="img" aria-label="name">
          💁🏻‍♀️
        </span>
      </h2>
      <TextInput
        field="name"
        label="Name"
        keepState
        step={step}
        id="nameStep"
        validate={isRequired("This field is required.")}
      />
    </>
  );
};

export default NameStep;
