import React from "react";
import styles from "./Body.module.css"
import { Container } from "../Container";

export const Body = (props) => {
  return(
    <div className={styles.bodyProt}>
      <header>
        <div>TimeFriend</div>
      </header>
      <Container tasks={props.tasks}/>
      {/* <footer></footer> */}
    </div>
  );
}