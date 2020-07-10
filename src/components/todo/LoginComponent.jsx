import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

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
        // if (this.state.username === 'admin' && this.state.password === 'dummy') {
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     //this.setState({showSuccessMessage: true})
        //     //this.setState({hasLoginFailed: false})
        // }
        // else {
        //     this.setState({ showSuccessMessage: false })
        //     this.setState({ hasLoginFailed: true })
        // }
        // console.log(this.state);

        // AuthenticationService.excuteBasicAuthenticationService(this.state.username, this.state.password)
        // .then(
        //     () => {
        //         AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //         this.props.history.push(`/welcome/${this.state.username}`)
        //     }
        // )
        // .catch(
        //     () => {
        //         this.setState({ showSuccessMessage: false })
        //         this.setState({ hasLoginFailed: true })
        //     }
        // )

        AuthenticationService.excuteJwtAuthenticationService(this.state.username, this.state.password)
        .then(
            (response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }
        )
        .catch(
            () => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            }
        )
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
                            <input type="text" className="form-control col-md-5 mx-auto" name="username" id="usernameInput" value={this.state.username} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordInput"> Password</label>
                            <input type="password" className="form-control col-md-5 mx-auto" name="password" id="passwordInput" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <button className="btn btn-success" type="button" onClick={this.loginClikced}> Login </button>
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

export default LoginComponent