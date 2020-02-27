import React, {useState} from 'react';
import AddNewTaskForm from './AddNewTaskForm';
import TodoList from './TodoList';
import './TodoApp.css'

const TodoApp = () => {

    
    const [tasks,setTasks] = useState([]);

    const addTask = task => {
        setTasks([...tasks,task]);
    }

    const deleteTask = task => {
        setTasks(tasks.filter(item => item.id!==task.id));
    }

    const editTask = (task) => {
        setTasks([tasks.filter(item => item.id!==task.id),task]);
    }

    return(
        <div className='container'>
            <AddNewTaskForm addTask={addTask} />
            <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
        </div>
    );
}

export default TodoApp;