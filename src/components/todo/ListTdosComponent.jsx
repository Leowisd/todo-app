import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from '../../components/todo/AuthenticationService.js'
import moment from 'moment'

class ListTdosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:[],
            message: null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }

    componentDidMount(){
        this.refreshTodos()
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
        .then(Response => {
            // console.log(Response)
            this.setState ({
                todos: Response.data
            })
        })
    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUserName()
        // console.log(username + '   ' + id);
        TodoDataService.deteleTodo(username, id)
        .then(
            response =>{
                this.setState({message: `Delete of todo ${id} sucessful`})
                this.refreshTodos()
            }
        )
    }

    updateTodoClicked(id){
        console.log("update " + id)
        this.props.history.push(`/todos/${id}`)
        // let username = AuthenticationService.getLoggedInUserName()
        // console.log(username + '   ' + id);
        // TodoDataService.deteleTodo(username, id)
        // .then(
        //     response =>{
        //         this.setState({message: `Delete of todo ${id} sucessful`})
        //         this.refreshTodos()
        //     }
        // )
    }

    addTodoClicked(){
        this.props.history.push(`/todos/-1`)
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.isDone.toString()}</td>
                                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Edit</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success mx-auto" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default ListTdosComponent