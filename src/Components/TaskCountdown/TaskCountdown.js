import React from "react";
import styles from "./TaskCountdown.module.css"
import {dateCountDown} from "../../Utils/dateCountDown"


export const TaskCountdown = ({startTime, finishTime, currentTime}) => (
  <div className={styles.taskCountdown}>
  
    <div className={styles.countdown}>
      {dateCountDown(
        new Date(startTime).getTime(), 
        new Date(finishTime).getTime(),
        currentTime
      )}
    </div>

    <div className={styles.hidden}>
      <span>start: {startTime}</span>
      <span>finish: {finishTime}</span>
    </div>
  </div>
)