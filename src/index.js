import React from "react";
import ReactDOM from "react-dom";
import {App} from "./Components/App"
import './styles/index.css'

const tasks = [
    {
        id:1,
        name: "First task",
        startTime: "April 30, 2019 23:39:00",
        finishTime: "May 1, 2019 14:12:00",
    },
    {
        id:2,
        name: "Second task",
        startTime: "May 1, 2019 14:12:00",
        finishTime: "May 13, 2019 17:38:00",
    },
    {
        id:3,
        name: "Third task",
        startTime: "May 13, 2019 17:38:00",
        finishTime: "May 25, 2019 01:03:00",
    },
]

ReactDOM.render(<App initialTasks={tasks}/>, document.getElementById('root'))
