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
  id: string;
};

const TextInput = ({
  id,
  keepState,
  field,
  label,
  validate,
  step,
  onChange,
  onFocus,
  onBlur,
  value,
  ...props
}: PropsType) => {
  const [focused, setFocused] = useState<boolean>(false);
  const { error, ...state } = useFieldState(field);

  return (
    <div className={styles.textInputContainer}>
      <Label
        htmlFor={id}
        floating={focused || Boolean(state.value)}
        label={label}
      >
        <InformedTextInput
          className={classnames(styles.textInput, {
            [styles.textInputError]: error
          })}
          aria-describedby={error && `${field}Message`}
          field={field}
          onFocus={(e) => {
            if (onFocus) onFocus(e);
            setFocused(true);
          }}
          onBlur={(e) => {
            if (onBlur) onBlur(e);
            setFocused(false);
          }}
          validateOnChange
          validateOnBlur
          validate={validate}
          keepState={keepState}
          step={step}
          onChange={onChange}
          value={value}
          id={id}
          {...props}
        />
      </Label>
      {error && !focused && <ErrorMessage field={field}>{error}</ErrorMessage>}
    </div>
  );
};

export default TextInput;
