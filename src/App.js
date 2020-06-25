import React, {Component} from 'react';
import Counter from './components/counter/Counter'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class LearningComponents extends Component{
  render(){
    return(
      <div className="LearningComponents">
        My Hello World!
      </div>
    )
  }
}

export default App;
