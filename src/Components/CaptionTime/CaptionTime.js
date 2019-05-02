import React from "react";
import styles from "./CaptionTime.module.css";
import {myWidth} from "../../Utils/myWidth"

export const CaptionTime = (props) => {
  return (
    <div 
    className = {styles.caption_time}
    style={{width: myWidth(new Date(props.task[0].startTime).getTime(), new Date(props.task[props.task.length-1].finishTime).getTime())}}
    >
    </div>
  );
}
