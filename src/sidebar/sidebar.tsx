import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BrokerModal from './brokerModal';
import ServerList from './serverList';
import './sidebar.css'

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleBrokerModalClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className="sidebar">
      <BrokerModal selectedValue={selectedValue} open={open} onClose={handleBrokerModalClose} />
      <header className="add-server-header">
        <div className="title">Servers</div>
        <IconButton color="primary" aria-label="add" onClick={handleClickOpen}>
          <AddCircleOutlineIcon fontSize="small" />
        </IconButton>  
      </header>
      <ServerList />
    </div>
  );
}
