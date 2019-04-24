import React from "react";
import styles from "./TaskProgress.module.css";

export const TaskProgress = (props) => {
    return(
        <div className={styles.task_progress} id={props.task.id}>
         {/* empty space */} 
        </div>
    );
}