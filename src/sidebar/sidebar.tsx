import * as React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import BrokerModal from './brokerModal';
import './sidebar.css'

interface SidebarProps {
  topics: Array<string>,
  selectedTopic: string,
  setTopic: Function,
  setTopics: Function,  // Just for testing
}

export default function Sidebar(props:SidebarProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleSetTopic = (event: React.ChangeEvent<{ value: unknown }>) => {
    let topic = event.target.value; // This will be a string ...
    props.setTopic(topic);
  }

  const handleSetTopics = () => {
    let topics: Array<string> = [
      "First",
      "second.topic",
      "third one, for fun."
    ]
    props.setTopics(topics);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className="sidebar">
      <header className="add-server-header">
        <div className="title">Servers</div>
        <Fab size="small" color="default" aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </Fab>  
      </header>
      <FormControl className="form-control">
        <InputLabel shrink id="select-topic-label">Topic</InputLabel>
        <Select
          displayEmpty
          autoWidth
          labelId="select-topic-label"
          id="select-topic"
          value={props.selectedTopic}
          onChange={handleSetTopic}
          className="select-empty"
        >
          <MenuItem value="" className="select-item">Please Select</MenuItem>
          {props.topics.map((item:string, id) => {
            return(<MenuItem value={item} key={id}>{item}</MenuItem>);
          })}
        </Select>
      </FormControl>
      <Button onClick={handleSetTopics}>Test Populate Topics</Button>
      
      <BrokerModal selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
