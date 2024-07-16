import React,{useState, useEffect} from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import {getTasks, createTask, updateTask,deleteTask} from '../api'

const Home = ()=>{
    const[tasks, setTasks] = useState([])
    const[currentTask, setCurrentTask] = useState(null)

    useEffect(()=>{
        loadTasks()
    },[]);
    const loadTasks = async()=>{
        const fetchedTask = await getTasks();
        setTasks(fetchedTask)
    }

    const handleSave = async(task:any)=>{
        if(currentTask){
            await updateTask(currentTask.id, task)
        }else{
            await createTask(task)
        }
        setCurrentTask(null)
        loadTasks()
    };
    const handleEdit = (task:any)=>{
        setCurrentTask(task)
    };
    const handleDelete = async (taskId:any) =>{
        await deleteTask(taskId)
        loadTasks
    };

    return(
        <div>
            <TaskForm task= {currentTask} onSave ={handleSave}/>
            <TaskList tasks = {tasks} onEdit={handleEdit} onDelete={handleDelete}/>
        </div>
    )
}

export default Home