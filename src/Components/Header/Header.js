import React, { useState } from 'react';

import styles from './Header.module.css'

import { CaptionName } from '../CaptionName';
import { CaptionTime } from '../CaptionTime';

export const Header = ({tasks, currentTime}) => {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [projectName, setProjectName] = useState("Project Name");

  const onProjectChange = (event)  => setProjectName(event.target.value);
  const toggleDisplay = () => setIsDisplayed(!isDisplayed);
  
  return(
    <header className={styles.header}>
      <CaptionName 
        onProjectChange={onProjectChange} 
        toggleDisplay={toggleDisplay} 
        isDisplayed={isDisplayed} 
        projectName={projectName}
      />
      <CaptionTime 
        startTime={new Date(tasks[0].startTime).getTime()}
        finishTime={new Date(tasks[tasks.length-1].finishTime).getTime()}
        currentTime={currentTime}
        color="white"
        />
    </header>
  )
}