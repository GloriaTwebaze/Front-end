import React, { useState, useEffect } from 'react';
import { Task } from '../types';

interface TaskFormProps {
    task: Task | null;
    onSave: (task: Task) => Promise<void>;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSave }) => {
    const [taskname, setTaskname] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (task) {
            setTaskname(task.taskname);
            setDescription(task.description);
            console.log('Task loaded in form:', task);
        }
    }, [task]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const newTask: Task = {
            id: task?.id || 0,
            taskname: taskname, 
            description: description,
            date_created: task?.date_created || new Date().toISOString()
        };
        console.log('Task being saved:', newTask);
        await onSave(newTask);
        setTaskname('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={taskname}
                    onChange={(e) => setTaskname(e.target.value)}
                />
            </div>
            <div>
                <label>Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
};

export default TaskForm;
