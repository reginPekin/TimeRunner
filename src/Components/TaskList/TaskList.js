import React from 'react'

import {Task} from '../Task'

import styles from './TaskList.module.css'

export const TaskList = ({tasks, onDelete, currentTime}) => (
  <section className = {styles.taskList}>
    {tasks.map((task, key) =>
        <Task 
          key={key} 
          task={task}
          onDelete={() => onDelete(task.id)} 
          currentTime={currentTime}
        /> 
      )}
    </section>
  )