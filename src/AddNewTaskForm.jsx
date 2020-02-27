import React, {useState} from 'react';
import './TodoApp.css'

const AddNewTaskForm = props => {

    let [count, setCount] = useState(1);

    const initialTask = {id:{count}, info:'', status: true};
    
    const [task, setTask] = useState(initialTask);

    const handleInputChange = event => {
        setTask({id: {count}, info: event.target.value ,status:true});  
    }

    return(
        <div id={count}>
            <form onSubmit={ event => {
                event.preventDefault()
                if (!task.info) return
                props.addTask(task);
                setTask(initialTask);
                setCount(count+1);
            }}
            >
                <input type='text' placeholder='Add task' value={task.info} onChange={handleInputChange}    />
            </form>
        </div>
    );

}

export default AddNewTaskForm;
