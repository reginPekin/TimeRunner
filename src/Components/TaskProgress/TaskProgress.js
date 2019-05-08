import React from "react";
import styles from "./TaskProgress.module.css";
import {myWidth} from "../../Utils/myWidth"

export const TaskProgress= (props) =>{
    return (
        <div className={styles.taskBorder}>
            <div 
                className={styles.taskProgress} 
                style={{width: myWidth(props.task.startTime, props.task.finishTime)}}>
                {/* empty space */} 
            </div>
        </div>
    );
}



