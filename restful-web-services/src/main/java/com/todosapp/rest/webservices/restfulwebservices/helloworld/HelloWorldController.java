package com.todosapp.rest.webservices.restfulwebservices.helloworld;

// import javax.websocket.server.PathParam;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

// Controller
@RestController
// Request from port 4200
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {
    // GET
    // URL = /hello-world
    // method = "Hello World"
    // @RequestMapping(method=RequestMethod.GET, path = "/hello-world")
    @GetMapping(path = "/hello-world")
    public String helloWorld(){
        return "Hello World";
    }

    // hellp-world-bean
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World Bean");
    }

    // hello-world/path-variable/admin
    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldBeanVariable(@PathVariable String name){
        // throw new RuntimeException("Something went wrong");
        return new HelloWorldBean(String.format("Hello World, %s", name));
    }
}