import React from "react";

import {TaskDescription} from "../TaskDescription";
import {TaskCountdown} from "../TaskCountdown";

import styles from "./Task.module.css";

export const Task = ({task, onDelete, currentTime}) => (
    <div className={styles.task}> 
      <TaskDescription 
        task={task} 
        onDelete={onDelete} 
        currentTime={currentTime}
      />
      
      <TaskCountdown 
        startTime={task.startTime} 
        finishTime={task.finishTime}
        currentTime={currentTime}
      />
    </div>
  )