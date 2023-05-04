import EduConnect from './components/nihar';
import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
     super(props);
     this.state={apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")
     .then(res => res.text())
     .then(res => this.setState({apiResponse: res}));
  }

  componentWillMount(){
    this.callAPI();
  }

  render(){
    return(
      <div>
        <p>{this.state.apiResponse}</p>
        <EduConnect />
      </div>
    )
  }
}


export default App;
