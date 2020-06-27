import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponment />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" exact component={LoginComponent} />
                            <Route path="/welcome/:name" component={WelcomeComponent} />
                            <Route path="/todos" component={ListTdosComponent} />
                            <Route path="/logout" exact component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponment />
                    </>
                </Router>
            </div>
        )
    }
}

class HeaderComponment extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div>
                    <Link to="/welcome/admin" className="navbar-brand">admin</Link>
                </div>
                <ul className="navbar-nav">
                    <li><Link to="/welcome/admin" className="nav-link">Home</Link></li>
                    <li><Link to="/todos" className="nav-link">Todos</Link></li>
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li><Link to="/login" className="nav-link">Login</Link></li>
                    <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>
                </ul>
            </nav>
        )
    }
}

class FooterComponment extends Component {
    render() {
        return (
            <div className="footer">
                <span className="text-muted">All Right Reserved 2020 @Leowisd</span>
            </div>
        )
    }
}

class LogoutComponent extends Component {
    render() {
        return (
            <div>
                <h1> You are logged out</h1>
                <div className="container">
                    Thank you for using our app!
                </div>
            </div>
        )
    }
}

class ListTdosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    { id: 1, description: 'Learn React', done: false, targetDate: new Date() },
                    { id: 2, description: 'Bacome an Expert at React', done: false, targetDate: new Date() },
                    { id: 3, description: 'Visit China', done: false, targetDate: new Date() }
                ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>Is Completed?</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>
            </>
        )
    }
}

function ErrorComponent() {
    return <div> 404 Error </div>
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'admin',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClikced = this.loginClikced.bind(this)
    }

    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClikced() {
        if (this.state.username === 'admin' && this.state.password === 'dummy') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({showSuccessMessage: true})
            //this.setState({hasLoginFailed: false})
        }
        else {
            console.log('Failed');
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>

                <div className="container pt-4">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials</div>}
                    {/* <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                    {this.state.showSuccessMessage && <div> Login Successful</div>}
                    <form>
                        <div className="form-group">
                            <label htmlFor="usernameInput"> User Name </label>
                            <input type="text" className="form-control col-md-5" style={{margin: "0 auto"}} name="username" id="usernameInput" value={this.state.username} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordInput"> Password</label>
                            <input type="password" className="form-control col-md-5" style={{margin: "0 auto"}} name="password" id="passwordInput" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <button className="btn btn-success" onClick={this.loginClikced}> Login </button>
                    </form>
                    
                    {/* <div>
                        User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div style={{paddingTop: "20px"}}>
                        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div style={{paddingTop: "20px"}}>
                        <button className="btn btn-success" onClick={this.loginClikced}> Login </button>
                    </div> */}
                </div>

            </div>
        )
    }
}

// function ShowInvalidCredentials(props){
//     if (props.hasLoginFailed){
//         return <div> Invalid Credentials</div>
//     }
//     return null
// }

// function ShowSuccessMessage(props){
//     if (props.showSuccessMessage){
//         return <div> Login Successful</div>
//     }
//     return null
// }

export default TodoApp