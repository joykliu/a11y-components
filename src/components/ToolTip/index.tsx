import React, { useState, useRef, useEffect } from "react";

import styles from "./index.module.css";

type PropsType = {
  content: string;
};

const ToolTip = ({ content }: PropsType) => {
  const [showContent, setShowContent] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    const node = buttonRef.current;
    if (node && node.contains(e.target as Node)) {
      return;
    }

    setShowContent(false);
  };

  useEffect(() => {
    if (showContent) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    if (buttonRef.current) {
      buttonRef.current.addEventListener("keydown", (e) => {
        if ((e.keyCode || e.which) === 27) setShowContent(false);
      });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showContent]);
  return (
    <div ref={buttonRef}>
      <button
        type="button"
        aria-label="more info"
        onClick={() => setShowContent(!showContent)}
        className={styles.tooltipIcon}
      >
        i
      </button>
      <span role="status">
        {showContent && (
          <span className={styles.tooltipContent}>{content}</span>
        )}
      </span>
    </div>
  );
};

export default ToolTip;
