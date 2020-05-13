import React from "react";
import {
  RadioGroup as InformedRadioGroup,
  Radio,
  FieldProps,
  FormValue,
  FormValues,
  useFieldState
} from "informed";
import ErrorMessage from "../ErrorMessage";

import styles from "./index.module.css";

type PropsType = FieldProps<FormValue, FormValues> & {
  label: string;
  options: Array<{
    label: string;
    id: string;
    value: string;
  }>;
};
const RadioGroup = ({
  keepState,
  field,
  label,
  validate,
  options,
  step
}: PropsType) => {
  const { error, touched } = useFieldState(field);
  return (
    <fieldset className={styles.radioGroupFieldset}>
      <legend className={styles.radioGroupLegend}>{label}</legend>
      <InformedRadioGroup
        field={field}
        step={step}
        validateOnChange
        validateOnBlur
        validate={validate}
        keepState={keepState}
      >
        {options.map((option) => (
          <label
            className={styles.radioInputLabel}
            htmlFor={option.id}
            key={option.id}
          >
            <Radio
              className={styles.radioInput}
              id={option.id}
              value={option.value}
              field={field}
            />
            <span className={styles.radioInputLabelText}>{option.label}</span>
          </label>
        ))}
      </InformedRadioGroup>
      {error && touched && <ErrorMessage field={field}>{error}</ErrorMessage>}
    </fieldset>
  );
};

export default RadioGroup;
