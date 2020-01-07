import * as React from 'react';
import './row.css';

interface RowProps {
  element: string
}

class Row extends React.Component<RowProps, any>  {
  constructor(props:RowProps) {
    super(props);
    console.log(this.props.element);
  }

  public render() {
    return (
      <div className="log-entry">
        {this.props.element}
      </div>
    );
  }
}

export default Row;
  