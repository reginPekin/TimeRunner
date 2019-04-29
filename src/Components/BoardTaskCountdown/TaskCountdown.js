import React from "react";
import styles from "./TaskCountdown.module.css"
import {dateCountDown} from "../../Utils/dateCountDown"


export class TaskCountdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finishTime: new Date(props.task.finishTime),
            startTime: new Date(props.task.startTime),
            date: new Date(props.task.finishTime) - new Date()
        }
    
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: this.state.finishTime - new Date()
        })
    }

    render() {
        return (
            <div className={styles.task_countdown} 
            data-title={
                "start time: " + this.state.startTime + 
                " finish time: " + this.state.finishTime
                }
                >
            {dateCountDown(this.state.date)}
            </div>
        )
    }
}