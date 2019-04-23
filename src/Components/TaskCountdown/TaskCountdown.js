import React from "react";
import styles from "./TaskCountdown.module.css"

export const TaskCountdown = (props) => {
    return(
        <div className={styles.task_countdown} data-title={"start time: " + props.task.startTime + " " +  "finish time: " + props.task.finishTime}>
         {/* empty space */} в
        </div>
    );
}