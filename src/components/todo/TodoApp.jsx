import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListTdosComponent from './ListTdosComponent'
import ErrorComponent from './ErrorComponment'
import HeaderComponment from './HeaderComponment'
import FooterComponment from './FooterComponment'
import LogoutComponent from './LogoutComponent'
import WelcomeComponent from './WelcomeComponent'
import TodoComponent from './TodoComponent'

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
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
                            <AuthenticatedRoute path="/todos" component={ListTdosComponent} />
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

export default TodoApp