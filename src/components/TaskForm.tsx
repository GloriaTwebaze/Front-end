import React,{useState, useEffect} from "react";

const TaskForm = ({task, onSave}:any)=>{
    const[title,setTitle]= useState("")
    const [description, setDescription] = useState('')

    useEffect(()=>{
        if(task){
            setTitle(task.title);
            setDescription(task.description)
        }
    },[task]);

    const handleSubmit=(e:any)=>{
        e.preventDefault()
        onSave({title, description});
        setTitle('')
        setDescription('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Title:</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="">Description:</label>
                <textarea name="" id="" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
            </div>
            <button type="submit">Save</button>
        </form>
    )
}
export default TaskForm