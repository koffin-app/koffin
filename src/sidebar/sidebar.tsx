import * as React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

class Sidebar extends React.Component {
  state = { open: false };

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className="sidebar">
        Servers
        <Fab color="primary" aria-label="add" onClick={this.handleOpen}>
          <AddIcon />
        </Fab>

        <Dialog open={this.state.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Connect to Server</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="server"
            label="Server"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Connect
          </Button>
        </DialogActions>
      </Dialog>

      </div>
    );
  }
}

export default Sidebar;
  