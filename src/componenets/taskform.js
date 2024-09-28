import React,{useState} from "react";

const Taskform =({addtask})=>{
    const [task , setTask ] = useState('');
    
    const handlesubmit =(e)=>{
        e.preventDefault();
        if(task)
            return addtask(task);
        setTask('');
    };
    
    return(
        
        <form onSubmit={handlesubmit}>
            <input 
            type="text"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            placeholder="Add a new Task"
            />
            <button type="submit">Add Task</button>
            
        </form>
        

        
    
        
        
    )
}
export default Taskform
