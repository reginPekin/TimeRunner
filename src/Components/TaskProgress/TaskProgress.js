import React from "react";
import styles from "./TaskProgress.module.css";

function TaskProgress(props){
    return(
        <div className={styles.task_progress} id={props.tasky.id}>
         {/* empty space */} в
        </div>
    );
}