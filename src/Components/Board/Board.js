import React from "react";
import {Task} from "../Task/index"
import styles from "./Board.module.css"

const finishTime = "April 27, 2019 23:39:00"

let minDate = ""
let month = ""
let day = ""
if(new Date().getMonth() < 9) month = "0" + (new Date().getMonth()+1)
else month = (new Date().getMonth()+1)

if(new Date().getDate() < 10) day = "0" + (new Date().getDate())
else day = (new Date().getDate())

minDate = (new Date().getFullYear() + "-" + month + "-" + day) 


export class Board extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        tasks: this.props.tasks,
        value:"",
        date:""
       
      }
  }

  onChange = (event)  => this.setState({value: event.target.value})
  onDateChange = (event)  => this.setState({date: event.target.value})

  onSubmit = (event) => {
    event.preventDefault() //не обновляй-ка
    console.log(this.state.date)
    
    const newTask = {
      id: this.state.tasks.length + 1,
      name: this.state.value,
      startTime: finishTime,
      finishTime: this.state.date
    }
    this.setState({tasks: [ ...this.state.tasks, newTask]})
  }

  onDelete = (id) => 
    this.setState({tasks: this.state.tasks.filter(task => task.id !== id)})


  render() {

    return(
      <div>
        <article className = {styles.board}>
          {this.state.tasks.map((task, key) => {
              return <Task 
                key={key} 
                task={task}
                onDelete={() => this.onDelete(task.id)} 
              />;
          })}
        </article>
        <form >
          <input 
            className = {styles.task_name}
            type="text" 
            placeholder="Your next task"
            value = {this.state.value}
            onChange={event => this.onChange(event)}
          />
          <input
            type="date"
            min = {minDate}
            date={this.state.date} 
            onChange={event => this.onDateChange(event)}
          />
          <button onClick={event => this.onSubmit(event)} >Push</button>
        </form>
      </div>
    );
  }
}
