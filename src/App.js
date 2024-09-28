import { useEffect, useState } from 'react';
import './App.css';
import Taskform from './componenets/taskform';
import TaskList from './componenets/TaskList';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tasks ,setTasks]=useState([]);
  const [loading, setLaoding] = useState(false)

  useEffect(()=>{
    getTask()
  },[])

  // add task in a list
  const addTask = (newTask)=>{
    setLaoding(true)
    axios.post('http://localhost:8000/api/task/',{title:newTask})
    .then(response =>{
      setLaoding(false)
      toast.success('Task addedd successfull')
      setTasks([...tasks,response.data]);
    })
    .catch(error => {
      setLaoding(true)
      toast.error('Failed to add task')
      console.error("Error in adding task",error)})


  }

  // delete task in backend
  const deleteTask=(id)=>{
    // alert(index)
    setLaoding(true)
    axios.delete(`http://localhost:8000/api/task/delete/${id}`)
    .then(response => {
      setLaoding(false)
      toast.success('Task deleted successfull')
      const newTask = tasks.filter((task) => task.index !==id);
      console.log('========newTask', newTask)
   setTasks(newTask);
   getTask()
      console.log("Task deleted successfully",response)
    })
    .catch(error =>{
      setLaoding(false)
      toast.error('Failed to delete task')
      console.error("Error Deleting task",error)
    })



  }
  // edit task
  const editTask=(id,updatedTitle)=>{
    setLaoding(true)
    axios.put(`http://localhost:8000/api/task/${id}`, {title:updatedTitle})
    .then(response => {
      setLaoding(false)
      toast.success('Task updated successfull')
      const updatedTasks =tasks.map((task)=>
        task.id === id ? {...task, title:updatedTitle} :task
      )
      setTasks(updatedTasks)
  //  getTask()
      console.log("Task deleted successfully",response)
    })
    .catch(error =>{
      toast.error('Failed to update task')
      setLaoding(false)
      console.error("Error Deleting task",error)
    })

  }


  const getTask = async()=>{
    try {
      setLaoding(true)
     await axios.get('http://localhost:8000/api/task/')
      .then(response =>{
        setTasks(response.data)
        setLaoding(false)
      })
      .catch(error =>{
        setLaoding(false)
        console.error("error fetching task",error)})
    } catch (error) {
      setLaoding(false)
    }
  }
  return (


    <div className='App'>
     {loading? <div style={{position:'absolute', top:'0', bottom:'0', left:'0', right:'0', display:'flex', justifyContent:'center', alignItems:'center', background:'gray'}}>
      <BeatLoader color='white' />
      </div>
:
''}
      <h1>Task Manager</h1>
      <Taskform addtask={addTask}/>
      <TaskList tasks={tasks} deletetask={deleteTask} editTask={editTask} />

    </div>
  );
}

export default App;
