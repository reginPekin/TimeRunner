import React from "react";
import ReactDOM from "react-dom";
import {Board} from "./Components/Board/index"

const tasks = [
    {
        name: "sketch",
        startTime: "April 22, 2019 23:39:00",
        finishTime: "April 27, 2019 23:39:00",
        id: "line0",
        idCountdown: "task--countdown0"
    },
    {
        name: "line",
        startTime: "April 27, 2019 23:39:00",
        finishTime: "May 2, 2019 23:39:00",
        id: "line1",
        idCountdown: "task--countdown1"
    },
    {
        name: "color",
        startTime: "May 2, 2019 23:39:00",
        finishTime: "May 5, 2019 23:39:00",
        id: "line2",
        idCountdown: "task--countdown2"
    },
]

ReactDOM.render(<Board tasks = {tasks}/>, document.getElementById('root'))