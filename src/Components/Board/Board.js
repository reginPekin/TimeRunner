import React from "react";
import {TaskDescription} from "../TaskDescription/index"


export const Board = (props) => {
    return (
    <div>
        {props.tasks.map(task => {
            return <TaskDescription task={task} />;
        })}
    </div>
    );
}