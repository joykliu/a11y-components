import React, { useState } from "react";
import { asField } from "informed";

import styles from "./index.module.css";

type PropsType = {
  min: number;
  max: number;
  id: string;
  label: string;
  step: number;
};

const RangeInput = asField<PropsType>(
  ({ fieldState, fieldApi, min, max, id, step, label }) => {
    const { value } = fieldState;
    const { setValue, setTouched } = fieldApi;

    const [selectedPercentage, setSelectedPercentage] = useState("0%");

    const getRangeValue = (inputValue: string) => {
      setValue(inputValue);
      const percentage = 100;
      const number = parseInt(inputValue, 10);
      if (!isNaN(number)) {
        setSelectedPercentage(`${(number / max) * percentage}%`);
      }
    };

    return (
      <label className={styles.rangeInputLabel} htmlFor={id}>
        <span className={styles.rangeInputLabelText}>{label}</span>
        <input
          defaultValue="0"
          className={styles.rangeInput}
          type="range"
          aria-describedby="rangeDesc"
          min={`${min}`}
          max={`${max}`}
          id={id}
          step={`${step}`}
          value={typeof value === "string" ? value : undefined}
          onChange={(e) => getRangeValue(e.target.value)}
          onBlur={() => {
            setTouched(true);
          }}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={
            typeof value === "string" ? parseInt(value, 10) : undefined
          }
          style={{
            background: `linear-gradient(to right, #077bbf 0%, #077bbf ${selectedPercentage}, #ddd ${selectedPercentage}, #ddd 100%)`
          }}
        />
      </label>
    );
  }
);

export default RangeInput;
