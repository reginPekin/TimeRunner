import React from "react";
import ReactDOM from "react-dom";
import {App} from "./Components/App/index"

const tasks = [
    {
        name: "sketch",
        startTime: "April 22, 2019 23:39:00",
        finishTime: "April 27, 2019 23:39:00",
        id: "line0"
    },
    {
        name: "line",
        startTime: "April 27, 2019 23:39:00",
        finishTime: "May 2, 2019 23:39:00",
        id: "line1"
    },
    {
        name: "color",
        startTime: "May 2, 2019 23:39:00",
        finishTime: "May 5, 2019 23:39:00",
        id: "line2"
    },
]

ReactDOM.render(<App tasks = {tasks}/>, document.getElementById('root'))