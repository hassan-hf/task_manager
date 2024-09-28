import React, { useState } from "react";

const Task =({task,deleteTask,editTask})=>{
    const [isEditing , setIsEditing] = useState(false)
    const [updatedTask , setUpdatedTask] =useState(task.title)
    const hendleEdit = () => {
        editTask(task.id,updatedTask) // call edit function passed as props
        setIsEditing(false);// exit edit mode
    }
    return (
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:'0.4rem'}}>
        {/* <li> */}
            {isEditing ? (
                <input
                type="text"
                value={updatedTask}
                onChange={(e)=>setUpdatedTask(e.target.value)}
                />
            ):(
                <span style={{width:'30%', alignItems:'start', display:'flex'}}>{task.title}</span>
            )}
            {task.id}
            <div style={{display:'flex', gap:'1rem'}}>


            <button onClick={deleteTask} style={{background:'red', borderRadius:'0.5rem'}}>Delete</button>
            {isEditing ? (
                <button onClick={hendleEdit} style={{background:'blue', borderRadius:'0.5rem'}}>Save</button>
            ):(
                <button onClick={()=> setIsEditing(true)} style={{background:'blue', borderRadius:'0.5rem'}}>Edit</button>
            )}
             </div>


        {/* </li> */}
        </div>
        )
}
export default Task;