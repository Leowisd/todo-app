import React, { Component } from 'react'
import {withRouter} from 'react-router'
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'


class HeaderComponment extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        // console.log(isUserLoggedIn)

        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="">
                    <Link to="/welcome/admin" className="navbar-brand">TodoApps</Link>
                </div>
                <ul className="navbar-nav navbar-collapse">
                    {isUserLoggedIn && <li><Link to="/welcome/admin" className="nav-link">Home</Link></li>}
                    {isUserLoggedIn && <li><Link to="/todos" className="nav-link">Todos</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                    {isUserLoggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthenticationService.logout}>Logout</Link></li>}
                </ul>
            </nav>
        )
    }
}

export default withRouter(HeaderComponment)
