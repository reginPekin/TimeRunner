import React from "react";
import styles from "./TaskCountdown.module.css"
import {dateCountDown} from "../../Utils/dateCountDown"


export const TaskCountdown = (props) => {
    return(
        <div className={styles.taskCountdown}>
            {dateCountDown(
                new Date(props.task.startTime).getTime(), 
                new Date(props.task.finishTime).getTime(),
                props.task.currentTime
            )}
        </div>
    )
}
// export class TaskCountdown extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             finishTime: new Date(props.task.finishTime),
//             startTime: new Date(props.task.startTime),
//         }
    
//     }

//     componentDidMount() {
//         this.timerID = setInterval(
//           () => this.tick(),
//           1000
//         );
//       }
    

//     tick() {
//         this.setState({
//             date: this.state.finishTime - new Date()
//         })
//     }

//     render() {
//         return (
//             <div className={styles.task_countdown} 
//             data-title={
//                 "start time: " + this.state.startTime + 
//                 " finish time: " + this.state.finishTime
//                 }
//                 >
//             {dateCountDown(this.state.date, this.state.startTime.getTime())}
//             </div>
//         )
//     }
// }