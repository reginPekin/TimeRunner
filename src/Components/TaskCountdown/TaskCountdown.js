import React from "react";
import styles from "./TaskCountdown.module.css"
import {dateCountDown} from "../../Utils/dateCountDown"


export const TaskCountdown = (props) => {
    return(
        <div className={styles.taskCountdown}>
            <div className={styles.countdown}>
                {dateCountDown(
                    new Date(props.startTime).getTime(), 
                    new Date(props.finishTime).getTime(),
                
                )}
            </div>

            <div className={styles.hidden}>
                <p> 
                    start: {props.startTime}
                    <br/>
                    finish: {props.finishTime}
                </p>
            </div>
        </div>
    )
}