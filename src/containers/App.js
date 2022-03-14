import React, { Component } from "react";
import GetBot from "../components/GetBot";
import {DebounceInput} from 'react-debounce-input';

import './App.css';

class App extends Component {
constructor(props){
  super(props);
  this.state={
    humanName: ""
  };
}



// UpdateInput = (e) => {
//   this.setState({humanName: e.target.value})
//   console.log(this.state.humanName);
// };


// handleClick = (e) => {
//   console.log(this.state.humanName);
// };


  render(){
    return (
      <div>
          <div className="container">
            <div className="getBotForm">
              <h1>ROBOT-IZE YOUR NAME!</h1>
              <DebounceInput
            minLength={2}
            type="text"
            placeholder="Enter a name to Robo-tize..."
            debounceTimeout={1000}
            onChange={event => this.setState({humanName: event.target.value})} />

            <GetBot nameToChange={this.state.humanName} />
              </div>
              <footer>
                <ul>
                  <li> © Copyright Oliver Armstrong 2022</li>
                  <li>API: <a href="https://robohash.org">Robohash.org</a></li>
                    </ul> 
              </footer>
            </div>
        </div>
      );
    
  } 
}

export default App;





