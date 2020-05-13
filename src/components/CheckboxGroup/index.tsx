import React from "react";
import { FieldProps, FormValue, FormValues } from "informed";
import CheckboxInput from "../CheckboxInput";

import styles from "./index.module.css";

type PropsType = FieldProps<FormValue, FormValues> & {
  label: string;
  subtitle: string;
  step?: number;
  keepState?: boolean;
  options: Array<{
    label: string;
    id: string;
  }>;
};

const CheckboxGroup = ({
  options,
  field,
  validate,
  label,
  subtitle,
  step,
  keepState
}: PropsType) => {
  return (
    <fieldset>
      <legend className={styles.checkboxGroupLegend}>
        {label}
        <small className={styles.checkboxGroupLegendSubtitle}>{subtitle}</small>
      </legend>
      {options.map((option) => (
        <div className={styles.checkboxItemContainer} key={option.id}>
          <CheckboxInput
            option={option}
            field={field}
            validate={validate}
            keepState={keepState}
            step={step}
          />
        </div>
      ))}
    </fieldset>
  );
};

export default CheckboxGroup;
