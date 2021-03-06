import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Metadata from './metadata/metadata'
import Consume from './consume'
import Produce from './produce'

function a11yProps(index: any) {
  return {
    id: `editor-tab-${index}`,
    'aria-controls': `editor-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  name: string;
  index: any;
  value: any;

}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, name, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`${name}`}
      aria-labelledby={`${name}`}
      className="editor-window"
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

interface EditorProps {
  selectedTopic: string,
}

export default function Editor(props:EditorProps) {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="editor">
      <AppBar position="static">
        <Tabs value={value} onChange={handleTabChange} aria-label="editor-tabs">
          <Tab label="Produce" {...a11yProps(0)} />
          <Tab label="Consume" {...a11yProps(1)} />
          <Tab label="Metadata" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} name="Produce">
        <Produce></Produce>
      </TabPanel>
      <TabPanel value={value} index={1} name="Consume">
        <Consume selectedTopic={props.selectedTopic}></Consume>
      </TabPanel>
      <TabPanel value={value} index={2} name="Metadata">
        <Metadata></Metadata>
      </TabPanel>
    </div>
  );
}
  