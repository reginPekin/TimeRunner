import React from "react";
import ReactDOM from "react-dom";
import {Body} from "./Components/BodyPrototype"

const tasks = [
    {
        id:1,
        name: "sketch",
        startTime: new Date().getTime(),
        finishTime: new Date().getTime() + 1000000000
    },
    {
        id:2,
        name: "line",
        startTime: "April 30, 2019 23:39:00",
        finishTime: "May 4, 2019 23:07:23"
    },
    {
        id:3,
        name: "color",
        startTime: new Date().getTime(),
        finishTime: new Date().getTime() + 100000,
    },
]

ReactDOM.render(<Body tasks = {tasks}/>, document.getElementById('root'))
