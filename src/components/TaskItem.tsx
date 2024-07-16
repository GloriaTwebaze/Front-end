
const TaskItem = ({task, onEdit, onDelete}:any)=>{
    return(
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>{new Date(task.created).toLocaleString()}</p>
            <button onClick={()=>onEdit(task)}>Edit</button>
            <button onClick={()=>onDelete(task)}>onDelete</button>
        </div>
    )
}

export default TaskItem