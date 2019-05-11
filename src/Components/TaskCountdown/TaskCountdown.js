import React from "react";
import styles from "./TaskCountdown.module.css"
import {dateCountDown} from "../../Utils/dateCountDown"


export const TaskCountdown = ({startTime, finishTime, currentTime}) => (
  <div className={styles.taskCountdown}>
    {dateCountDown(
        new Date(startTime).getTime(), 
        new Date(finishTime).getTime(),
        currentTime
      )}
  </div>
)