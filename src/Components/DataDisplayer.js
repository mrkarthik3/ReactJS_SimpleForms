import React from "react";
import styles from "./DataDisplayer.module.css";
import DataItem from "./DataItem";

function DataDisplayer(props) {
  const dataArray = props.data.map((item) => {
    return <DataItem username={item.username} age={item.age} key={item.id} />;
  });
  return <div className={styles.datadisplayer}>{dataArray}</div>;
}

export default DataDisplayer;
