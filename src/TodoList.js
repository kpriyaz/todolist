import React from 'react'
import Task from './Task'

const TodoList = (props) => {

    return(

        props.tasks.map( task => (
            <Task task={task} deleteTask={props.deleteTask} editTask={props.editTask}/>
        ))
    );
}

export default TodoList;