import React from "react";
import classNames from "classnames";

import styles from "./index.module.css";

type PropsType = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
  submit?: boolean;
  ariaLabel?: string;
  loading?: boolean;
  primary?: boolean;
  secondary?: boolean;
  className?: string;
  disabled?: boolean;
};

const Button = ({
  children,
  onClick,
  submit,
  ariaLabel,
  loading,
  primary,
  secondary,
  disabled,
  className
}: PropsType) => {
  return (
    <button
      className={classNames(className, styles.button, {
        [styles.buttonPrimary]: primary,
        [styles.buttonSecondary]: secondary
      })}
      onClick={onClick}
      type={submit ? "submit" : "button"}
      aria-label={ariaLabel}
      disabled={loading || disabled}
      aria-live="polite"
    >
      {loading ? "...Loading" : children}
    </button>
  );
};

export default Button;
