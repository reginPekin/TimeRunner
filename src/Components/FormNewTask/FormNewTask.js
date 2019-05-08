import React from "react";

export const FormNewTask = (
    {value, 
    startDate,
    // isDisabled,
    finishDate, 
    onChange}) => {
  return(
    <form>
      <input 
        // className = {styles.taskName}
        type="text" 
        placeholder="Your next task"
        value={value}
        onChange={event => onChange(event)}
      />

      <br/>

      <input
        type="date"
        // min = {minDate()}
        value={startDate} 
        // onChange={event => this.onDateChange(event)}
      />

      <br/>

      <input
        type="date"
        value={finishDate} 
        min = {startDate}
        // onChange={event => this.onDateFinishChange(event)}
      />
      
      {/* <button disabled={isDisabled} onClick={event => this.onSubmit(event)} > */}
        {/* Push */}
      {/* </button> */}

    </form>
  )
}




