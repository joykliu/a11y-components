import React, { useState } from "react";
import classnames from "classnames";

import {
  Text as InformedTextInput,
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
};

const TextInput = ({ keepState, field, label, validate, step }: PropsType) => {
  const [focused, setFocused] = useState<boolean>(false);
  const { error, value } = useFieldState(field);
  return (
    <div className={styles.textInputContainer}>
      <Label htmlFor={field} floating={focused || Boolean(value)} label={label}>
        <InformedTextInput
          className={classnames(styles.textInput, {
            [styles.textInputError]: error
          })}
          aria-describedby={error && `${field}Message`}
          field={field}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          validateOnChange
          validateOnBlur
          validate={validate}
          keepState={keepState}
          step={step}
        />
      </Label>
      {error && !focused && <ErrorMessage field={field}>{error}</ErrorMessage>}
    </div>
  );
};

export default TextInput;
