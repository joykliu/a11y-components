import React, { useState, useEffect } from "react";
import moment, { Moment } from "moment";
import { asField, FieldProps, FormValue, FormValues } from "informed";
import classNames from "classnames";
import { SingleDatePicker } from "react-dates";
import { DateRangePickerPhrases } from "react-dates/lib/defaultPhrases";

import Label from "../Label";
import ErrorMessage from "../ErrorMessage";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import "./singleDatePickerOverrides.css";
import styles from "./index.module.css";

type PropsType = FieldProps<FormValue, FormValues> & {
  label: string;
  isRequired?: boolean;
};

export const isMomentObject = (date: FormValue): date is Moment => {
  if (date && (date as Moment).isValid()) {
    return true;
  }
  return false;
};

const DatePicker = asField<PropsType>(
  ({ fieldState, fieldApi, label, field, isRequired }) => {
    const { value, error, touched } = fieldState;
    const { setValue, setError, setTouched } = fieldApi;

    const [isFocused, setIsFocused] = useState<boolean | null>(false);
    const formattedSelectedDate = isMomentObject(value)
      ? moment(value).format("dddd, MMMM Do YYYY")
      : undefined;

    const handleOnFocusChange = (focused: boolean | null) => {
      setTouched(true);
      setIsFocused(focused);
    };

    useEffect(() => {
      console.log("yay");

      if (isRequired && touched) {
        if (!value) {
          setError("This field is required");
        } else {
          setError(undefined);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [touched, value]);

    return (
      <div className={styles.datePickerContainer}>
        <Label
          htmlFor={field}
          floating={Boolean(isFocused || value)}
          label={label}
        >
          <div
            className={classNames(styles.datePickerInputContainer, {
              [styles.datePickerInputContainerFocused]: isFocused,
              [styles.datePickerInputContainerCompleted]:
                value !== undefined && !error,
              [styles.datePickerInputContainerError]: error && !isFocused
            })}
          >
            <SingleDatePicker
              numberOfMonths={1}
              id={field}
              placeholder=""
              date={isMomentObject(value) ? value : null}
              focused={isFocused}
              onDateChange={(date) => {
                if (date) {
                  setValue(date);
                }
              }}
              onFocusChange={({ focused }) => handleOnFocusChange(focused)}
              noBorder
              phrases={{
                ...DateRangePickerPhrases,
                chooseAvailableStartDate: ({ date }: { date: string }) =>
                  `choose ${date} as your start date`,
                chooseAvailableEndDate: ({ date }: { date: string }) =>
                  `choose ${date} as your end date`
              }}
            />
          </div>
        </Label>
        {error && !isFocused && (
          <ErrorMessage field={field}>{error}</ErrorMessage>
        )}
        {formattedSelectedDate && !error && (
          <small
            className={styles.selectedDate}
            aria-live="polite"
            id={`${field}Message`}
          >
            Your selected date is {formattedSelectedDate}
          </small>
        )}
      </div>
    );
  }
);

export default DatePicker;
