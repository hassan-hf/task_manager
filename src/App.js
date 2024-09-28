import { useEffect, useState } from 'react';
import './App.css';
import Taskform from './componenets/taskform';
import TaskList from './componenets/TaskList';
import axios from 'axios';





function App() {
  const [tasks ,setTasks]=useState([]);
  
  
  // add task in a list
  const addTask = (newTask)=>{
    axios.post('http://localhost:8000/api/task/',{title:newTask})
    .then(response =>{
      setTasks([...tasks,response.data]);
    })
    .catch(error => console.error("Error in adding task",error))
    

  }
 
  // delete task in backend
  const deleteTask=(index)=>{
    //axios.delete(`http://localhost:8000/api/task/delete/`)
    //.then(response => {
      const newTask = tasks.filter((task) => task.index !==index);
   setTasks(newTask);
      //console.log("Task deleted successfully",response)
    //})
    //.catch(error =>{
      //console.error("Error Deleting task",error)
    //})
   


  }
  // edit task
  const editTask=(id,updatedTitle)=>{
    const updatedTasks =tasks.map((task)=>
      task.id === id ? {...task, title:updatedTitle} :task
    )
    setTasks(updatedTasks)
  }
 
  useEffect(()=>{
    axios.get('http://localhost:8000/api/task/')
    .then(response =>setTasks(response.data))
    .catch(error =>console.error("error fetching task",error))
  },[])
  return (

    
    <div className='App'>
      
      <h1>Task Manager</h1>
      
      <TaskList tasks={tasks} deletetask={deleteTask} editTask={editTask} />
      <Taskform addtask={addTask}/>
    </div>    
  );
}

export default App;
