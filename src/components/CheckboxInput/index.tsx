import React from "react";

import {
  Checkbox as InformedCheckbox,
  FieldProps,
  FormValue,
  FormValues
} from "informed";

import styles from "./index.module.css";

type PropsType = FieldProps<FormValue, FormValues> & {
  option: {
    label: string;
    id: string;
  };
};

const CheckboxInput = ({
  keepState,
  option,
  field,
  validate,
  disabled
}: PropsType) => {
  return (
    <label className={styles.checkboxLabel} htmlFor={option.id}>
      <InformedCheckbox
        className={styles.checkbox}
        id={option.id}
        field={field}
        validate={validate}
        disabled={disabled}
        keepState={keepState}
      />
      <span className={styles.checkboxLabelText}>{option.label}</span>
    </label>
  );
};

export default CheckboxInput;
