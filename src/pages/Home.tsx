import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { getTasks, createTask, updateTask, deleteTask } from '../api';
import { Task } from '../types';

const Home: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [currentTask, setCurrentTask] = useState<Task | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            setLoading(true);
            const fetchedTasks = await getTasks();
            setTasks(fetchedTasks);
        } catch (error) {
            console.error('Failed to load tasks:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (task: Task) => {
        try {
            if (currentTask && currentTask.id) {
                await updateTask(currentTask.id, task);
            } else {
                await createTask(task);
            }
            setCurrentTask(null);
            await loadTasks();
        } catch (error) {
            console.error('Failed to save task:', error);
        }
    };

    const handleEdit = (task: Task) => {
        setCurrentTask(task);
    };

    const handleDelete = async (taskId: number) => {
        try {
            console.log(`Attempting to delete task with ID: ${taskId}`);
            await deleteTask(taskId);
            await loadTasks();
            console.log(`Task with ID: ${taskId} deleted and tasks reloaded`);
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    return (
        <div>
            <TaskForm task={currentTask} onSave={handleSave} />
            {loading ? (
                <p>Loading tasks...</p>
            ) : (
                <TaskList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
            )}
        </div>
    );
};

export default Home;
