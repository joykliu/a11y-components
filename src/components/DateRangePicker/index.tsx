import React, { useState } from "react";
import shortid from "shortid";
import moment, { Moment } from "moment";
import { DateRangePicker as ReactDateDateRangePicker } from "react-dates";
import { DateRangePickerPhrases } from "react-dates/lib/defaultPhrases";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import styles from "./index.module.css";
import "./dateRangePickerOverrides.css";

type FocusedInput = "startDate" | "endDate" | null;

type PropsType = {
  startDateId: string;
  endDateId: string;
  label: string;
};

const DateRangePicker = ({ startDateId, endDateId, label }: PropsType) => {
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<FocusedInput>(null);
  const formattedStartDate = startDate
    ? moment(startDate).format("dddd, MMMM Do YYYY")
    : undefined;
  const formattedEndDate = endDate
    ? moment(endDate).format("dddd, MMMM Do YYYY")
    : undefined;
  const id = shortid.generate();
  return (
    <fieldset>
      <legend
        id={`date-range-label-${id}`}
        className={styles.dateRangePickerLabel}
      >
        {label}
      </legend>

      <ReactDateDateRangePicker
        noBorder
        aria-describedby={`date-range-label-${id}`}
        startDate={startDate}
        startDateId={startDateId}
        endDate={endDate}
        endDateId={endDateId}
        onDatesChange={(params) => {
          setStartDate(params.startDate);
          setEndDate(params.endDate);
        }}
        focusedInput={focusedInput}
        onFocusChange={(input) => setFocusedInput(input)}
        phrases={{
          ...DateRangePickerPhrases,
          chooseAvailableStartDate: ({ date }: { date: string }) =>
            `choose ${date} as your start date`,
          chooseAvailableEndDate: ({ date }: { date: string }) =>
            `choose ${date} as your end date`
        }}
      />

      <br />
      {formattedStartDate && (
        <small>Your start date is {formattedStartDate}</small>
      )}
      <br />
      {formattedEndDate && <small>Your end date is {formattedEndDate}</small>}
    </fieldset>
  );
};

export default DateRangePicker;
