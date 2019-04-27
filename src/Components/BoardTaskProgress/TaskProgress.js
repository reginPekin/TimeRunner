import React from "react";
import styles from "./TaskProgress.module.css";


export class TaskProgress extends React.Component{

    constructor(props) {
        super(props);
        this.state= {
            widthMy: "100%",
            finishTime: this.props.finishTime,
            startTime: this.props.startTime
            };

        
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.widthChange(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

      widthChange() {
        this.setState( () => ({
          widthMy: (100/
          (
            (new Date(this.state.finishTime).getTime() - new Date(this.state.startTime).getTime())/ 
            (new Date(this.state.finishTime).getTime() - new Date().getTime())
            )).toString() + "%"
        }));
      }
    
      render() {
        return (
        <div className={styles.task_progress} style={{width: this.state.widthMy}}>
        {/* empty space */} 
        </div>
        );
      }
    }
    



