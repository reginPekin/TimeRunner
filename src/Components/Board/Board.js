import React from "react";
import {Task} from "../Task/index"
import styles from "./Board.module.css"


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
        startDate:"",
        finishDate: ""
       
      }
  }

  onChange = (event)  => this.setState({value: event.target.value})
  onDateChange = (event)  => this.setState({startDate: event.target.value})
  onDateFinishChange = (event)  => this.setState({finishDate: event.target.value})

  onSubmit = (event) => {
    event.preventDefault() //не обновляй-ка
    console.log(this.state.startDate)
    
    const newTask = {
      id: this.state.tasks.length + 1,
      name: this.state.value,
      startTime: this.state.startDate,
      finishTime: this.state.finishDate
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
            date={this.state.startDate} 
            onChange={event => this.onDateChange(event)}
          />
          <input
            type="date"
            min = {this.state.startDate}
            date={this.state.finishDate} 
            onChange={event => this.onDateFinishChange(event)}
          />
          <button onClick={event => this.onSubmit(event)} >Push</button>
        </form>
      </div>
    );
  }
}
