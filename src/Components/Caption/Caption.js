import React from "react";
import styles from "./Caption.module.css";
import {CaptionTime} from "../CaptionTime"

export const Caption = (props) => {
  return (
    <main>
      <div className = {styles.caption}>
        <div className = {styles.captionName}>
          Project Name
        </div>
        <CaptionTime task={props.task}/>
      </div>
    </main>
  );
}
