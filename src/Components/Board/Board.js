import React from "react";
import {Task} from "../Task/index"
import styles from "./Board.module.css"

const startTime = "April 22, 2019 23:39:00"
const finishTime = "April 27, 2019 23:39:00"

export class Board extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        tasks: this.props.tasks,
        value: ""
      }
  }

  onChange = (event)  => this.setState({value: event.target.value})

  onSubmit = (event) => {
    console.log(event.pageX)
    event.preventDefault() //не обновляй-ка
    const newTask = {
      id: this.state.tasks.length + 1,
      name: this.state.value,
      startTime,
      finishTime
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
            type="text" 
            placeholder="Your next task"
            value = {this.state.value}
            onChange={event => this.onChange(event)}
          />
          <button onClick={event => this.onSubmit(event)} >Push</button>
        </form>
      </div>
    );
  }
}
