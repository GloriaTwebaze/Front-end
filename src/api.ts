
const API_URL_CREATE = 'http://127.0.0.1:8000/todo/create-todo/'
const API_URL_GET = 'http://127.0.0.1:8000/todo/view-todos/'
const API_URL_EDIT = 'http://127.0.0.1:8000/todo/edit-todo/'
const API_URL_DEL = 'http://127.0.0.1:8000/todo/delete/'


export const getTasks = async() =>{
    const response = await fetch(API_URL_GET);
    const data = await response.json();
    console.log('Tasks fetched:', data);
    return data;
};


export const createTask = async (task:any) => {
    console.log('Creating task with data:', task)
    const response = await fetch(API_URL_CREATE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    return response.json();
    
};


export const updateTask = async (id:any, task:any) =>{
    const response = await fetch(`${API_URL_EDIT}${id}/`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(task)
    })
    return response.json()
}

export const deleteTask = async (id: any) => {
    console.log(`Deleting task with ID: ${id}`);
    const response = await fetch(`${API_URL_DEL}${id}/`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete task');
    }
    console.log(`Task with ID: ${id} deleted successfully`);
};