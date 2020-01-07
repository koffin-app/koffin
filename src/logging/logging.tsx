import * as React from 'react';
import './logging.css';
import Row from './row';
import Button from '@material-ui/core/Button';

interface LoggingProps {
  logs: Array<string>,
  appendLogs: Function,
  clearLogs: Function
}

class Logging extends React.Component<LoggingProps, any> {
  constructor(props:LoggingProps) {
    super(props);

    this.callAppendLog = this.callAppendLog.bind(this);
    this.clearLogs = this.clearLogs.bind(this);
  }

  callAppendLog() {
    this.props.appendLogs("It has been clicked.");
  }

  clearLogs() {
    this.props.clearLogs();
  }

  public render() {
    return (
      <div className="logging">
        Logging
        {this.props.logs.map((element, i) => {
          console.log(element);
          return(<Row element={element} key={i}></Row>)
        })}
        <Button variant="contained" onClick={this.callAppendLog}>Log Testing</Button>
        <Button variant="contained" color="secondary" onClick={this.clearLogs}>Clear Logs</Button>
      </div>
    );
  }
}

export default Logging;
  