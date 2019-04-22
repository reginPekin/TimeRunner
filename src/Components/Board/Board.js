import React from "react";
import {TaskDescription} from "../TaskDescription/index"
import styles from ""


export const Board = (props) => {
    return (
    <div className = {styles.board}>
        {props.tasks.map(task => {
            return <TaskDescription task={task} />;
        })}
    </div>
    );
}