import React from "react";
import {Task} from "../BoardTask"
import styles from "./Board.module.css"
import {formatDate} from "../../Utils/dateConvert"
import style from "../Caption/Caption.module.css"
import {CaptionTime} from "../CaptionTime"
// import {minDate} from "../../Utils/minDate"

export class Board extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        tasks: this.props.tasks,
        isDisplayed: true,
        isDisabled: true,
        projectName: "Project Name",
        value:"",
        startDate:"",
        finishDate:undefined
      }
  }

  onChange = (event)  => this.setState({value: event.target.value})
  onProjectChange = (event)  => this.setState({projectName: event.target.value})
  onDateChange = (event)  => this.setState({startDate: event.target.value})
  onDateFinishChange = (event)  => 
    {
      console.log(event.target.value)
      this.setState({finishDate: event.target.value});
      this.onDisable(); 
    }
                                    
  

  onSubmit = (event) => {
    event.preventDefault() //не обновляй-ка
    const newTask = {
      id: this.state.tasks.length + 1,
      name: this.state.value,
      startTime: formatDate('DD, YYYY HH:mm:ss',new Date(this.state.startDate),true),
      finishTime: formatDate('DD, YYYY HH:mm:ss',new Date(this.state.finishDate),true),
      difference: new Date(this.state.finishDate).getTime() - new Date().getTime() 
    }
    this.setState({tasks: [ ...this.state.tasks, newTask]});
    this.setState({value: ""})
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

  onDisable = () => {
      if(!(this.state.finishDate))
        this.setState({isDisabled: !this.state.isDisabled});
      // else 
        // this.setState({isDisabled: this.state.isDisabled}); 
      }

  

  render() {
    
    return(
      <div>
        <main>
          {/* <div className = {style.caption}>  */} <div>
            {/* <div className = {style.captionName}> */} <div>
              <form onSubmit={(event) => {
                console.log(event)
                event.preventDefault();
                this.setState({isDisplayed: !this.state.isDisplayed});
                
              }}
                >
                <input
                 placeholder="Project Name" style={{display: this.state.isDisplayed ? "none" : "block"}} 
                              onChange={event => this.onProjectChange(event)}></input>
              </form>
              &nbsp;<p className={styles.title} style={{display: this.state.isDisplayed ? "block" : "none"}}>
                      {this.state.projectName} 
                      <button style={{}} className={styles.buttonM} onClick={() => this.setState({isDisplayed: !this.state.isDisplayed})}>Х</button>
                    </p>
            </div>
            <CaptionTime task={this.state.tasks}/>
          </div>
        </main>

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
            value={this.state.value}
            onChange={event => this.onChange(event)}

          />
          <br/>
          
          <input
            type="date"
            // min = {minDate()}
            value={this.state.startDate} 
            onChange={event => this.onDateChange(event)}
          />
          <br/>
          <input
            type="date"
            value={this.state.finishDate} 
            min = {this.state.startDate}
            onChange={event => this.onDateFinishChange(event)}
                                
          />
          <br/>
          <button disabled={this.state.isDisabled} onClick={event => this.onSubmit(event)} >Push</button>
          </form>
      </div>
    );
  }
}