import React from "react";
import styles from "./Caption.module.css";
import {CaptionTime} from "../CaptionTime/index"

export const Caption = () => {
  return (
    <main>
      <div className = {styles.caption}>
        <div className = {styles.caption_name}>
          Project Name
        </div>
        <CaptionTime/>
      </div>
    </main>
  );
}
