import React, { useState } from 'react';

import styles from './AddTask.module.css';

export const AddTask = ({text, startDate, finishDate, onSubmit}) => {
  const [isDisabled, setIsDisabled] = useState(true)

  return(
    <form className={styles.formic}>

      <div className={styles.taskName}>
      <input 
        type="text" 
        placeholder="Your next task"
        value={text.value}
        onChange={text.onChange}
      />
      <span></span>
      </div>
      
      <input
        style={{border:"none"}}
        type="date"
        value={startDate.value} 
        onChange={startDate.onChange}
      />
      
      <input
        style={{border:"none"}}
        type="date"
        value={finishDate.value} 
        min = {startDate.value}
        onChange={event => {
          finishDate.onChange(event);
          setIsDisabled(false);
        }}
      />
      

      <button disabled={isDisabled} onClick={onSubmit}>
        Push
      </button>
          
    </form>
  )
}