import React from "react";
import styles from "./Body.module.css"
import { Container } from "../Container";

export const Body = (props) => {
  return(
    <div className={styles.bodyProt}>
      <Container className={styles.conyainer} tasks={props.tasks}/>
      {/* <footer>dd</footer> */}
    </div>
  );
}