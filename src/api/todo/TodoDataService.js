import axios from "axios"
import {API_URL} from "../../Constants.js"

class TodoDataService{

    retrieveAllTodos(username){
        return axios.get(`${API_URL}/users/${username}/todos`)
    }

    deteleTodo(name, id){
        return axios.delete(`${API_URL}/users/${name}/todos/${id}`)
    }

    retrieveTodo(name, id){
        return axios.get(`${API_URL}/users/${name}/todos/${id}`)
    }

    updateTodo(name, id, todo){
        return axios.put(`${API_URL}/users/${name}/todos/${id}`, todo)
    }

    createTodo(name, todo){
        return axios.post(`${API_URL}/users/${name}/todos`, todo)
    }
}

export default new TodoDataService()