import React from 'react';
import { Task } from '../types';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    onEdit: (task: Task) => void;
    onDelete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <TaskItem task={task} onEdit={onEdit} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
