import React from 'react';
import { useState } from 'react';




const Task = (props) => {

    const initialInfo = props.task.info;
    const [infor,setInfor] = useState(initialInfo);
    const {id,info,status} = props.task;

    const handleEdit = event => {
        setInfor(event.target.value);
    }

    return(
        <div id={props.task.id}>
            <form onSubmit = { event => {
                event.preventDefault();
                const task = {id:{id},info:{infor},status:{status}}
                setInfor(initialInfo);
                props.editTask(task);
            }}>
                <input type='checkbox'/>
                <input type='text' value={infor} onChange={handleEdit}/>
                <button type='button' onClick={() => props.deleteTask(props.task)}>Delete</button>
            </form>
        </div>
    );
}

export default Task;