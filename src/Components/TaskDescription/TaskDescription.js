import React from "react";

import styles from "./TaskDescription.module.css";

import { CaptionTime } from "../CaptionTime";

export const TaskDescription = ({ task, onDelete, currentTime }) => (
  <div className={styles.taskDescription}>
    <div>
    <div className={styles.taskName}>
      <span className={styles.spanName}>{task.name}</span>
      <button className={styles.deleteTask} onClick={onDelete}>Х</button>
    </div>
    
    <CaptionTime
      startTime={task.startTime} 
      finishTime={task.finishTime}
      currentTime={currentTime}
    />
    </div>

    <div className={styles.hidden}>
      <span>Start date: {task.startTime}    Finish date: {task.finishTime}</span>
    </div>
  </div>
)