import React from "react";
import styles from "./TaskCountdown.module.css"


export class TaskCountdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finishTime: new Date(props.task.finishTime).getTime(),
            startTime: new Date(props.task.startTime).getTime(),
            date: new Date(props.task.finishTime).getTime() - new Date().getTime()
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
            date: this.state.finishTime - new Date().getTime()
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
            {this.state.date}
            </div>
        )
    }
}