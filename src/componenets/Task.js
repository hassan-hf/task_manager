import React, { useState } from "react";

const Task =({task,deleteTask,editTask})=>{
    const [isEditing , setIsEditing] = useState(false)
    const [updatedTask , setUpdatedTask] =useState(task.title)
    const hendleEdit = () => {
        editTask(task.id,updatedTask) // call edit function passed as props
        setIsEditing(false);// exit edit mode 
    }
    return (
        <div className="btn">
        <li>
            {isEditing ? (
                <input 
                type="text"
                value={updatedTask}
                onChange={(e)=>setUpdatedTask(e.target.value)}
                />
            ):(
                <span>{task.title}</span>
            )}
            {task.id}            
            <button onClick={deleteTask}>Delete</button>
            {isEditing ? (
                <button onClick={hendleEdit}>Save</button>
            ):(
                <button onClick={()=> setIsEditing(true)}>Edit</button>
            )}
           

        </li>
        </div>
        )
}
export default Task;