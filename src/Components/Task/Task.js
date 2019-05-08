import React from "react";
import {TaskDescription} from "../TaskDescription"
import {TaskCountdown} from "../TaskCountdown"
import styles from "./Task.module.css"

export const Task = (props) => {
    return(
        <div className={styles.task}> 
            <TaskDescription task={props.task}/>
            <TaskCountdown startTime={props.task.startTime} finishTime={props.task.finishTime}/>
        </div>
    );
}