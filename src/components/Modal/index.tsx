import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";

import shortid from "shortid";

import styles from "./index.module.css";

type PropsType = {
  isOpen: boolean;
  aria?: {
    labelledby?: string;
    describedby?: string;
  };
  children: React.ReactNode | React.ReactNode[];
  onRequestClose(): void;
  title: string;
  content?: string;
};

const Modal = ({
  children,
  isOpen,
  onRequestClose,
  title,
  content
}: PropsType) => {
  // Ensure all IDs are unique throughout the site.
  const [showModal, setShowModal] = useState(false);
  const shortId = shortid.generate(); // Use this to generate unique ids

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const appElement = document.getElementById("root");
    if (appElement) ReactModal.setAppElement(appElement);
  }, []);

  return (
    <ReactModal
      isOpen={showModal}
      aria={{
        labelledby: `modal-title-${shortId}`,
        describedby: `modal-content-${shortId}`
      }}
      onRequestClose={onRequestClose}
      closeTimeoutMS={250}
      className={{
        base: styles.modal,
        afterOpen: styles.modalAfterOpen,
        beforeClose: styles.modalBeforeClose
      }} // Used to remove default styles.
      overlayClassName={{
        base: styles.modalOverlay,
        afterOpen: styles.modalOverlayAfterOpen,
        beforeClose: styles.modalOverlayBeforeClose
      }} // Used to remove default styles.
      bodyOpenClassName={styles.modalIsOpen}
    >
      <div className={styles.modalHeadingContainer}>
        <h3 id={`modal-title-${shortId}`}>{title}</h3>
      </div>
      {content && (
        <p
          id={`modal-content-${shortId}`}
          className={styles.modalTitleDescription}
        >
          {content}
        </p>
      )}
      <div className={styles.modalCloseContainer}>
        <button type="button" onClick={onRequestClose} aria-label="exit modal">
          X
        </button>
      </div>
      {children}
    </ReactModal>
  );
};

export default Modal;
