import axios from "axios"

class TodoDataService{

    retrieveAllTodos(username){
        return axios.get(`http://localhost:8080/users/${username}/todos`)
    }

    deteleTodo(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }

    retrieveTodo(name, id){
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`)
    }
}

export default new TodoDataService()