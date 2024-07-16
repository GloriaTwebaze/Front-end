import TaskItem from "./TaskItem";

const TaskList = ({tasks, onEdit, onDelete}:any)=>{
    return(
        <div>
            {tasks.map((task:any)=>(
                <TaskItem
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
                />
            ))}
        </div>
    )
}

export default TaskList