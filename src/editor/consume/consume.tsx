import * as React from 'react';

interface ConsumeProps {
  selectedTopic: string
}

class Consume extends React.Component<ConsumeProps, any>  {
  constructor(props:ConsumeProps) {
    super(props);
  }

  public render() {
    let selectedTopic:string = this.props.selectedTopic;
    let topic:string;
    if (selectedTopic === "") {
      topic = "Consume";
    } else {
      topic = "Consume from " + selectedTopic;
    }
    console.log(selectedTopic);
    console.log(topic);
    return (
      <div>
        {topic}
      </div>
    );
  }
}

export default Consume;
  