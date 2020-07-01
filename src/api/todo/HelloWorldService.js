import Axios from "axios";

import axios from 'axios'

class HelloWorldService {
    executeHelloWorldService(){
        // console.log("Hello World Service");
        return axios.get('http://localhost:8080/hello-world')
    }

    executeHelloWorldBeanService(){
        // console.log("Hello World Service");
        return axios.get('http://localhost:8080/hello-world-bean')
    }

    executeHelloWorldBeanVariable(name){
        // console.log("Hello World Service");
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    }
}

export default new HelloWorldService()