import React,{ useState, useEffect } from "react";

import { formatDate } from "../../Utils/dateConvert";

import { Header } from "../Header";
import { AddTask } from "../AddTask";
import { TaskList } from "../TaskList";

export const App = ({initialTasks}) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  useEffect(
    () => setInterval(() => setCurrentTime(new Date().getTime()), 1000),[]
  )
  return(
    <div>
      <Header 
        tasks={tasks}
        currentTime={currentTime}
        />

      <TaskList 
        tasks={tasks}
        onDelete={id => setTasks(tasks.filter(task => task.id !== id))}
        currentTime={currentTime}
      />

      <AddTask 
        text={{value: text, onChange: event => setText(event.target.value)}}
        startDate={{value: startDate, onChange: event => setStartDate(event.target.value)}}
        finishDate={{value: finishDate, onChange: event => setFinishDate(event.target.value)}}
        onSubmit={event => {
          event.preventDefault()
          const newTask = {
            id: tasks.length + 1,
            name: text,
            startTime: formatDate('DD, YYYY HH:mm:ss',new Date(startDate),true),
            finishTime: formatDate('DD, YYYY HH:mm:ss',new Date(finishDate),true)
          }
          setTasks([...tasks, newTask]);
          setText("");
        }}
      />
    </div>
  );
}