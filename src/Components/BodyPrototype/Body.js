import React from "react";
import styles from "./Body.module.css"
import { Container } from "../Container";

export const Body = (props) => {
  return(
    <div className={styles.body}>
      <header>
        <div>TimeFriend</div>
      </header>
      <Container tasks={props.tasks}/>
      <footer></footer>
    </div>
  );
}