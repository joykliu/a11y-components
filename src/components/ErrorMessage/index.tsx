import React from "react";

import styles from "./index.module.css";

type PropsType = {
  field: string;
  children: string;
};

const ErrorMessage = ({ field, children }: PropsType) => {
  return (
    <small
      className={styles.errorMessage}
      aria-live="polite"
      id={`${field}Message`}
    >
      {children}
    </small>
  );
};

export default ErrorMessage;
