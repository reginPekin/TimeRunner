import React from "react";
import styles from "./TaskCountdown.module.css"

export const TaskCountdown = (props) => {
    return(
        <div className={styles.task_countdown} id={props.task.idCountdown}>
         {/* empty space */} в
        </div>
    );
}