import React from 'react';
import styles from './CaptionName.module.css'

export const CaptionName = ({onProjectChange, toggleDisplay, isDisplayed,projectName}) => (
    
  <div className = {styles.captionName}>

      <form onSubmit={(event) => {
        event.preventDefault();
        toggleDisplay();
        
      }}>

        <input 
          className={styles.inputic}
          placeholder="Project Name" 
          style={{display: isDisplayed ? "none" : "block"}} 
          onChange={onProjectChange}>
        </input> 
      </form>

      &nbsp;
      
      <h1
        className={styles.title} 
        style={{display: isDisplayed ? "block" : "none"}}
        onClick={() => toggleDisplay()}
        >
          {projectName} 
          
      </h1>

    </div>
  
  );