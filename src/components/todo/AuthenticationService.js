class AuthenticationService {
    registerSuccessfulLogin(username, password){
        console.log("successful")
        sessionStorage.setItem('authenticatedUser', username)
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }
}

export default new AuthenticationService()