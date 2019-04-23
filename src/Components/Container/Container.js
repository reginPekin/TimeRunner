import React from "react";
import {Caption} from "../CaptionAllComponents/Caption/index"
import {Board} from "../BoardAllComponents/Board/index"
import styles from "./Container.module.css"

export const Container = (props) => {
  return (
    <div className={styles.container}>
      <Caption />
      <Board tasks = {props.tasks}/>
    </div>
  );
}