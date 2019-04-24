import React from "react";
import ReactDOM from "react-dom";
import {Body} from "./Components/BodyPrototype"

const tasks = [
    {
        id:1,
        name: "sketch",
        startTime: "April 22, 2019 23:39:00",
        finishTime: "April 27, 2019 23:39:00"
    },
    {
        id:2,
        name: "line",
        startTime: "April 27, 2019 23:39:00",
        finishTime: "May 2, 2019 23:39:00"
    },
    {
        id:3,
        name: "color",
        startTime: "May 2, 2019 23:39:00",
        finishTime: "May 5, 2019 23:39:00",
    },
]

ReactDOM.render(<Body tasks = {tasks}/>, document.getElementById('root'))