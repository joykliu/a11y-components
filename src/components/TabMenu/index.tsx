import React, { useState } from "react";
import classNames from "classnames";

import styles from "./index.module.css";

type Tab = {
  title: string;
  content: string;
  id: string;
};

type PropsType = {
  tabs: Tab[];
};

const TabMenu = ({ tabs }: PropsType) => {
  const [selected, setSelected] = useState(tabs[0].id);

  return (
    <>
      <div role="tablist" aria-label="Entertainment">
        {tabs.map((tab) => (
          <button
            role="tab"
            type="button"
            aria-selected={selected === tab.id}
            aria-controls={`${tab.id}-content`}
            id={tab.id}
            onClick={() => setSelected(tab.id)}
            className={classNames(styles.tabButton, {
              [styles.tabButtonSelected]: selected === tab.id
            })}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          tabIndex={0}
          role="tabpanel"
          id={`${tab.id}-content`}
          aria-labelledby={tab.id}
          className={classNames(styles.tabPanel, {
            [styles.tabPanelSelected]: selected === tab.id
          })}
        >
          <p>{tab.content}</p>
        </div>
      ))}
    </>
  );
};

export default TabMenu;
