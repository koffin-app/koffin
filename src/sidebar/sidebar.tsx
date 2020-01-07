import * as React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import BrokerModal from './brokerModal';

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className="sidebar">
      Servers
      <Fab size="small" color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <BrokerModal selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
