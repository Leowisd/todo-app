package com.todosapp.rest.webservices.restfulwebservices.jwt.resource;

import java.io.Serializable;

public class JwtTokenRequest implements Serializable {

    private static final long serialVersionUID = -5616176897013108345L;

    private String username;
    private String password;

    // {
    //     "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5NDk1OTM4MCwiaWF0IjoxNTk0MzU0NTgwfQ.WApgMjB2ZP3tQAZoa4K4TuenW6zXjvAR5yAjA8ALISh_x-mQ45aEb5jwpL9jIqelkl92A5yG4k5XLWlWQvBbCw"
    //     }

    public JwtTokenRequest() {
        super();
    }

    public JwtTokenRequest(String username, String password) {
        this.setUsername(username);
        this.setPassword(password);
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
