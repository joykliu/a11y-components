import React, { useState } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

import { Moment } from "moment";
import { DateRangePicker as ReactDateDateRangePicker } from "react-dates";

// import styles from "./index.module.css";

type FocusedInput = "startDate" | "endDate" | null;

type PropsType = {
  startDateId: string;
  endDateId: string;
};

const DateRangePicker = ({ startDateId, endDateId }: PropsType) => {
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<FocusedInput>(null);

  return (
    <ReactDateDateRangePicker
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
    />
  );
};

export default DateRangePicker;
