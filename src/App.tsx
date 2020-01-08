import React from 'react';
import './App.css';
import { KoffinContext } from './KoffinContext'
import Sidebar from './sidebar/sidebar'
import Editor from './editor/editor'
import Logging from './logging/logging'


interface AppState {
  logs: Array<string>
}

class App extends React.Component<any, AppState> {

  constructor(props:any) {
    super(props);
    let initialState: AppState = {
      logs: ["Started", ],
    }
    this.state = initialState;

    this.appendLog = this.appendLog.bind(this);
    this.clearLog = this.clearLog.bind(this);
  }

  appendLog(item:string) {
    const currentLogs = this.state.logs;
    const newLogs = [
      ...currentLogs,
      item
    ];
    this.setState({logs: newLogs});
  }

  clearLog() {
    const newLogs = ["Logs Cleared!"];
    this.setState({logs: newLogs});
  }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <KoffinContext.Provider value={this.state}>
            <Sidebar></Sidebar>
            <div className="primary-pane">
              <Editor></Editor>
              <Logging 
                logs={this.state.logs}
                appendLogs={this.appendLog}
                clearLogs={this.clearLog}></Logging>
            </div>
          </KoffinContext.Provider>
        </div>
      </div>
    );
  }

}

export default App;
