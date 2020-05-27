import React from "react";
import classnames from "classnames";

import styles from "./index.module.css";

type PropsType = {
  htmlFor: string;
  floating?: boolean;
  label: string;
  children: React.ReactNode;
};

const Label = ({ htmlFor, floating, label, children }: PropsType) => (
  <label htmlFor={htmlFor} className={styles.container}>
    {children}
    <span
      className={classnames(styles.label, { [styles.labelFloating]: floating })}
    >
      {label}
    </span>
  </label>
);

export default Label;
