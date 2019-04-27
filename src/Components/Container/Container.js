import React from "react";
import {Caption} from "../Caption"
import {Board} from "../Board"
import styles from "./Container.module.css"

export const Container = (props) => {
  return (
    <div className={styles.container}>
      <Caption />
      <Board tasks = {props.tasks}/>
    </div>
  );
}