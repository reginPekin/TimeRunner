import React from "react";
import ReactDOM from "react-dom";
import {App} from "./Components/App"
import './styles/index.css'

const tasks = [
    {
        id:1,
        name: "Vanya",
        startTime: new Date().getTime(),
        finishTime: new Date().getTime() + 1000000000
    },
    {
        id:2,
        name: "Vanechka",
        startTime: "April 30, 2019 23:39:00",
        finishTime: "May 4, 2019 23:07:23"
    },
    {
        id:3,
        name: "Malysh",
        startTime: new Date().getTime(),
        finishTime: new Date().getTime() + 100000,
    },
]

ReactDOM.render(<App initialTasks={tasks}/>, document.getElementById('root'))
