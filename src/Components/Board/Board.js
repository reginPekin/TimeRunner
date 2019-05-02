import React from "react";
import {Task} from "../BoardTask"
import styles from "./Board.module.css"
import {formatDate} from "../../Utils/dateConvert"
// import {minDate} from "../../Utils/minDate"

export class Board extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        tasks: this.props.tasks,
        value:"",
        startDate:""
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
      startTime: formatDate('DD, YYYY HH:mm:ss',new Date(this.state.startDate),true),
      finishTime: formatDate('DD, YYYY HH:mm:ss',new Date(this.state.finishDate),true),
      difference: new Date(this.state.finishDate).getTime() - new Date().getTime() 
    }
    this.setState({tasks: [ ...this.state.tasks, newTask]})
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
    });
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
        <form>
          <input 
            className = {styles.taskName}
            type="text" 
            placeholder="Your next task"
            value = {this.state.value}
            onChange={event => this.onChange(event)}
          />
          <br/>
          
          <input
            type="date"
            // min = {minDate()}
            date={this.state.startDate} 
            onChange={event => this.onDateChange(event)}
          />
          <br/>
          <input
            type="date"
            min = {this.state.startDate}
            date={this.state.finishDate} 
            onChange={event => this.onDateFinishChange(event)}
          />
          <br/>
          <button onClick={event => this.onSubmit(event)} >Push</button>
          </form>
      </div>
    );
  }
}
