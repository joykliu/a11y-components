import React, { useState, useEffect } from "react";
import classNames from "classnames";

import styles from "./index.module.css";
import Button from "../Button";

type AccordionItem = {
  title: string;
  description: string;
  id: string;
};
type AccordionPropsType = {
  accordionItems: AccordionItem[];
};

type AccordionItemPropsType = {
  item: AccordionItem;
  expanded: boolean;
  onClick: (id: string) => void;
};

const AccordionItem = ({ item, expanded, onClick }: AccordionItemPropsType) => {
  return (
    <div className={styles.accordionItem}>
      <h3>
        <button
          aria-expanded={expanded}
          className={styles.accordionItemButton}
          aria-controls={`section-${item.id}`}
          onClick={() => onClick(item.id)}
          id={item.id}
        >
          <span className={styles.accordionTitle}>
            {item.title}
            <span className={styles.accordionIcon} aria-hidden="true">
              {expanded ? "-" : "+"}
            </span>
          </span>
        </button>
      </h3>
      <div
        id={`section-${item.id}`}
        role="region"
        aria-labelledby={item.id}
        className={classNames(styles.accordionSection, {
          [styles.accordionSectionExpanded]: expanded
        })}
      >
        {item.description}
      </div>
    </div>
  );
};

const Accordion = ({ accordionItems }: AccordionPropsType) => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const handleAccordionItemClick = (id: string) => {
    const newExpanded = expanded.includes(id)
      ? expanded.filter((item) => item !== id)
      : [...expanded, id];
    setExpanded(newExpanded);
  };

  const handleExpandAllClick = () => {
    if (expanded.length > 0) {
      setExpanded([]);
    } else {
      const itemIds = accordionItems.map((item) => item.id);
      setExpanded(itemIds);
    }
  };

  // useEffect(() => {
  //   window.addEventListener("keydown", (event: KeyboardEvent) => {
  //     const target = event.target as HTMLButtonElement;
  //     const key = event.which.toString();

  //     // 33 = Page Up, 34 = Page Down
  //     const upAndDownArrows = /38|40/;
  //     const ctrlModifier = event.ctrlKey && upAndDownArrows.exec(key);

  //     // Is this coming from an accordion header?
  //     if (target && target.hasAttribute("aria-controls")) {
  //       // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
  //       // 38 = Up, 40 = Down
  //       if (ctrlModifier) {
  //         const index = triggers.indexOf(target);
  //         const direction = key.match(/34|40/) ? 1 : -1;
  //         const length = triggers.length;
  //         const newIndex = (index + length + direction) % length;

  //         triggers[newIndex].focus();

  //         event.preventDefault();
  //       } else if (key.match(/35|36/)) {
  //         // 35 = End, 36 = Home keyboard operations
  //         switch (key) {
  //           // Go to first accordion
  //           case "36":
  //             triggers[0].focus();
  //             break;
  //           // Go to last accordion
  //           case "35":
  //             triggers[triggers.length - 1].focus();
  //             break;
  //         }
  //         event.preventDefault();
  //       }
  //     }
  //   });
  //   return () => {
  //     window.removeEventListener("keydown");
  //   };
  // }, []);

  // Bind keyboard behaviors on the main accordion container

  return (
    <div id="accordionGroup" className={styles.accordion}>
      <Button
        onClick={handleExpandAllClick}
        primary
        className={styles.accordionButtonExpandAll}
        aria-live="polite"
      >
        {expanded.length > 0 ? "collapse all" : "expand all"}
      </Button>
      {accordionItems.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          expanded={expanded.includes(item.id)}
          onClick={handleAccordionItemClick}
        />
      ))}
    </div>
  );
};

export default Accordion;
