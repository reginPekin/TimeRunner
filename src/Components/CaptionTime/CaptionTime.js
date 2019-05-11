import React from "react";

import styles from "./CaptionTime.module.css";

import { myWidth } from "../../Utils/myWidth"

export const CaptionTime = ({
  startTime, 
  finishTime, 
  currentTime = Date.now(), 
  color = 'green'}) =>(
    <div 
      // className={styles.greenLineBorder}
      // style={{borderColor: color === 'green' ? '#0baa9a' : 'white'}}
    >
      <div 
        className = {styles.captionTime}
        style={{
          width: myWidth(startTime, finishTime, currentTime),
          backgroundColor: color === 'green' ? '#0baa9a' : 'white',
        }}
      >
      </div>
    </div>
)