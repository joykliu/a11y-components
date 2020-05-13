import React, { useState } from "react";
import classnames from "classnames";

import {
  Select,
  Option,
  FieldProps,
  FormValue,
  FormValues,
  useFieldState
} from "informed";
import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

import styles from "./index.module.css";

type PropsType = FieldProps<FormValue, FormValues> & {
  label: string;
  options: Array<{ label: string; id: string; value: string }>;
};

const SelectInput = ({ field, label, options, validate }: PropsType) => {
  const { error, value } = useFieldState(field);
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div className={styles.selectInputContainer}>
      <Label htmlFor={field} floating={focused || Boolean(value)} label={label}>
        <Select
          className={classnames(styles.selectInput, {
            [styles.selectInputError]: error
          })}
          aria-describedby={error && `${field}Message`}
          field={field}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          validateOnChange
          validateOnBlur
          validate={validate}
        >
          <Option value="" />
          {options.map((option) => (
            <Option value={option.value} id={option.id} key={option.id}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Label>
      {error && !focused && <ErrorMessage field={field}>{error}</ErrorMessage>}
    </div>
  );
};

export default SelectInput;
