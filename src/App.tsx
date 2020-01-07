import React from 'react';
import './App.css';
import { KoffinContext } from './KoffinContext'
import Sidebar from './sidebar/sidebar'
import Editor from './editor/editor'
import Logging from './logging/logging'



class App extends React.Component {

  constructor(props:any) {
    super(props);
    this.setState({});
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-main">
          <KoffinContext.Provider value={this.state}>
            <Sidebar></Sidebar>
            <Editor></Editor>
            <Logging></Logging>
          </KoffinContext.Provider>
        </div>
      </div>
    );
  }
  
}

export default App;
