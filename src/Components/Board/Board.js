import React from "react";
import {Task} from "../Task/index"
import styles from "./Board.module.css"


export const Board = (props) => {
    return (
    <article className = {styles.board}>
            {props.tasks.map(task => {
                return <Task task={task} />;
            })}
       
    </article>
    );
}