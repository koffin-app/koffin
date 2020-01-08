import React from 'react';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import './produce.css';

export default function Produce() {

  const [value, setValue] = React.useState('json');
  const [open, successAction] = React.useState(false);
  const [textValue, setTextValue] = React.useState()

  // Should be moved to a service that can start dialog with success and failure
  function Alert(props: AlertProps) {
    return <MuiAlert elevation={2} variant="filled" {...props} />;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleTextAreaChange = (event: React.ChangeEvent) => {
    setTextValue((event.target as HTMLTextAreaElement).value);
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    successAction(false);
  }

  const handleClick = () => {
    // TODO send data to Kafka and success or fail dialog
    successAction(true);
  };

  return (
    <div className="content">
      <FormControl component="fieldset" className="data-type-form">
        <RadioGroup style={{display: 'flex', flexDirection: 'row'}} aria-label="data-type-rg" value={value} onChange={handleChange}>
          <FormControlLabel style={{display: 'inline-block'}} value="text" control={<Radio />} label="Text" />
          <FormControlLabel style={{display: 'inline-block'}} value="json" control={<Radio />} label="Json" />
          <FormControlLabel style={{display: 'inline-block'}} value="avro" control={<Radio />} label="Avro" />
          </RadioGroup>
      </FormControl>
      <textarea className="text-editor" value={textValue} onChange={handleTextAreaChange}/>
     <Button onClick={handleClick}>Submit</Button>
     <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} color="success">
          Successfully sent data
        </Alert>
      </Snackbar>
     
    </div>
  );
}