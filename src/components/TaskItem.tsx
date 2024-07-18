import React from 'react';
import { Task } from '../types';

interface TaskItemProps {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
    console.log('Rendering task:', task);

    return (
        <div>
            <h3>{task.taskname}</h3>
            <p>{task.description}</p>
            <p>{new Date(task.date_created).toLocaleString()}</p>
            <button onClick={() => onEdit(task)}>Edit</button>
            <button onClick={() => onDelete(task.id!)}>Delete</button> {/* Ensure task.id is passed */}
        </div>
    );
};

export default TaskItem;
