import App from "./App";

const API_URL = ''


export const getTasks = async() =>{
    const response = await fetch(API_URL);
    return response.json()
};

export const createTask = async(task:any) =>{
    const response = await fetch(API_URL, {
        method: 'POST',
        headers:{
            'Content:Type':'application/json'
        },
        body:JSON.stringify(task)
    });;
    return response.json();
}

export const updateTask = async (id:any, task:any) =>{
    const response = await fetch(`${API_URL}${id}/`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(task)
    })
    return response.json()
}

export const deleteTask = async(id:any) =>{
    await fetch(`${API_URL}${id}/`,{
        method:'DELETE'
    })
}