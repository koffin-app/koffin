import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export interface BrokerModalProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function BrokerModal(props: BrokerModalProps)  {
  const { onClose, selectedValue, open } = props;
  
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleConnect = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="form-dialog-title" open={open}>
      <DialogTitle id="form-dialog-title">Connect to Server</DialogTitle>
      <DialogContent>
        <TextField autoFocus margin="dense" id="server" label="Server" type="text" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()} color="secondary">
          Cancel
        </Button>
        <Button onClick={() => handleConnect('server')} color="primary">
          Connect
        </Button>
      </DialogActions>
    </Dialog>
  );
}
