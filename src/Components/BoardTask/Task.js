import React from "react";
import {TaskDescription} from "../BoardTaskDescription"
import {TaskCountdown} from "../BoardTaskCountdown"
import styles from "./Task.module.css"

export const Task = (props) => {
    return(
        <div className={styles.task}> 
            <TaskDescription task={props.task}/>
            <TaskCountdown task={props.task}/>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    );
}