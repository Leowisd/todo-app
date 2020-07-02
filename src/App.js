import React, {Component} from 'react';
// import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'
import './App.css'
import './bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <TodoApp />
      </div>
    );
  }
}

// class LearningComponents extends Component{
//   render(){
//     return(
//       <div className="LearningComponents">
//         My Hello World!
//       </div>
//     )
//   }
// }

export default App;
