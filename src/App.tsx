import React from 'react';
import './App.css';
import Sidebar from './sidebar/sidebar'
import Editor from './editor/editor'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-main">
        <Sidebar></Sidebar>
        <Editor></Editor>
      </div>
    </div>
  );
}

export default App;
