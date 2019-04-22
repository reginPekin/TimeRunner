import React from "react";
import {TaskDescription} from "../TaskDescription/index"
import {TaskCountdown} from "../TaskCountdown/index"
import styles from "./Task.module.css"

export const Task = (props) => {
    return(
        <div className = {styles.task}> 
            <TaskDescription task = {props.task}/>
            <TaskCountdown task = {props.task}/>
        </div>
    );
}