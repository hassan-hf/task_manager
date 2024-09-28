import React,{useState} from "react";
import { toast } from "react-toastify";

const Taskform =({addtask})=>{
    const [task , setTask ] = useState('');

    const handlesubmit =(e)=>{
        e.preventDefault();
        if(task){
            setTask('')
            return addtask(task);
        }else{
            toast.warn('Please add something first')
        }

    };

    return(

        <form onSubmit={handlesubmit} style={{display:'flex', gap:'0.3rem', justifyContent:'center'}}>
            <input
            style={{height:'2rem', border:'1px solid gray', borderRadius:'0.3rem'}}
            type="text"
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            placeholder="Add a new Task"
            />
            <button type="submit" style={{borderRadius:'.5rem'}}>Add Task</button>

        </form>






    )
}
export default Taskform
