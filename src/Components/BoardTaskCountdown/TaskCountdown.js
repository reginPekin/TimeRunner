import React from "react";
import styles from "./TaskCountdown.module.css"
import {dateCountDown} from "../../Utils/dateCountDown"


export const TaskCountdown = (props) => {
    return(
        <div className={styles.taskCountdown}
        data-title={
            "start time: " + props.startTime + "\n" +
            " finish time: " + props.finishTime
            }>
            {dateCountDown(
                new Date(props.startTime).getTime(), 
                new Date(props.finishTime).getTime(),
               
            )}
        </div>
    )
}