import React from "react";
import Task from "./Task";


const TaskList =({tasks,deletetask,editTask})=>{
    return(
        <ul>
            {tasks.map((task,index)=>(
                <Task key={task.id }
                task={task}
                deleteTask={()=>deletetask(task.id)}
                editTask={editTask}
                />
            ))}
        </ul>
    )
}
export default TaskList