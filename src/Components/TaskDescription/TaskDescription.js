import React from "react";
import styles from "./TaskDescription.module.css";
import {TaskProgress} from "../TaskProgress/index"

export const TaskDescription = (props) => {
    return(
        <div className = {styles.task_description}>
            <div className={styles.task_name}>
                <p>{props.task.name}</p>
            </div>
            <TaskProgress tasky = {props.task} />
        </div>
        
    );
}