import React from 'react';
import './App.css';
import { KoffinContext } from './KoffinContext'
import Sidebar from './sidebar/sidebar'
import Editor from './editor/editor'
import Logging from './logging/logging'


interface AppState {
  logs: Array<string>,
  topics: Array<string>,
  selectedTopic: string,
}

class App extends React.Component<any, AppState> {

  constructor(props:any) {
    super(props);
    let initialState: AppState = {
      logs: ["Started", ],
      topics: [],
      selectedTopic: "",
    }
    this.state = initialState;

    this.appendLog = this.appendLog.bind(this);
    this.clearLog = this.clearLog.bind(this);
    this.setSelectedTopic = this.setSelectedTopic.bind(this);
    this.setTopics = this.setTopics.bind(this);
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

  setSelectedTopic(topic:string) {
    this.setState({selectedTopic: topic});
  }

  setTopics(topics:Array<string>) {
    this.setState({topics: topics});
  }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <KoffinContext.Provider value={this.state}>
            <Sidebar
              topics={this.state.topics}
              selectedTopic={this.state.selectedTopic}
              setTopic={this.setSelectedTopic}
              setTopics={this.setTopics}></Sidebar>
            <div className="primary-pane">
              <Editor
                selectedTopic={this.state.selectedTopic}></Editor>
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
