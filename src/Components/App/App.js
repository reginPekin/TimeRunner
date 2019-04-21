import React from "react";
import {TaskDescription} from "../TaskDescription/index"

function App() {
    return (
    <div>
        {tasks.map((task) => <TaskDescription task = {task}/>)}
    </div>
    );
}