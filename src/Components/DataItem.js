import React from "react";
import styles from "./DataItem.module.css";

function DataItem(props) {
  return (
    <div className={styles.dataitem}>
      {props.username} ({props.age} years old)
    </div>
  );
}

export default DataItem;
