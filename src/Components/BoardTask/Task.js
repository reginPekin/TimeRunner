import React from "react";
import {TaskDescription} from "../BoardTaskDescription"
import {TaskCountdown} from "../BoardTaskCountdown"
import styles from "./Task.module.css"

export const Task = (props) => {
    return(
        <div className={styles.task}> 
            <TaskDescription task={props.task}/>
            <TaskCountdown startTime={props.task.startTime} finishTime={props.task.finishTime} currentTime={props.task.currentTime}/>
            
            <button onClick={props.onDelete}>Х</button>
        </div>
    );
}