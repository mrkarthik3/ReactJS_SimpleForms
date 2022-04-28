import React, { useState } from "react";
import styles from "./Modal.module.css";
function Modal(props) {
  const closeModalHandler = (event) => {
    props.setIsError(false);
    props.errTypes({});
  };

  // Identifying type of error
  let error = "";
  if (props.errors.ageError) {
    error = "Age";
  }
  if (props.errors.nameError) {
    error = "Username";
  }
  if (props.errors.nameError && props.errors.ageError) {
    error = "Username & Age"; // must be at last.
  }

  return (
    <div className={styles.modal}>
      <div className={styles.close} onClick={closeModalHandler}>
        [X]
      </div>
      <div className={styles.center}>
        <h3>Input Error!</h3>
        <p>Please enter correct data for {error}!</p>
      </div>
    </div>
  );
}

export default Modal;
