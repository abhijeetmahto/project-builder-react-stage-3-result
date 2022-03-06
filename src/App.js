import React, { Component } from 'react';
import HomeComponent from './component/HomeComponent';
import QuizComponent from './component/QuizComponent'; 
import ResultComponent from './component/ResultComponent';
import './App.css'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ans: [],
      res: ""
    }
  }
  getAns = (newAns) => {
    this.setState({
      ans: [...newAns]
    })
  }
  render(){
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><HomeComponent /></Route>
          <Route path="/quiz"><QuizComponent sentAns={this.getAns} /></Route>
          <Route path="/result"><ResultComponent sentAns={this.state.ans} /></Route>
        </Switch>
      </Router>
    </div>
    );
  }
}

export default App;