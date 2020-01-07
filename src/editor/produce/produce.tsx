import React from 'react';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './produce.css';

export default function Produce() {

  const [value, setValue] = React.useState('json');
  const [textValue, setTextValue] = React.useState()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleTextAreaChange = (event: React.ChangeEvent) => {
    setTextValue((event.target as HTMLTextAreaElement).value);
  }

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
     <Button>Submit</Button>
    </div>
  );
}