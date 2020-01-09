import * as React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

interface ServerListProps {
  topics: Array<string>,
  selectedTopic: string,
  setTopic: Function,
  setTopics: Function,  // Just for testing
}

export default function ServerList(props: ServerListProps) {
  const classes = useStyles();
  const [expand, setExpand] = React.useState(false);
  
  const handleExpand = () => {
    setExpand(!expand);
  };

  const handleSetTopic = (event: React.ChangeEvent<{ value: unknown }>) => {
    let topic = event.target.value; // This will be a string ...
    props.setTopic(topic);
  }

  return (
    <List component="nav" aria-label="servers">
      <ListItem button>
        <ListItemText primary="Server 1" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Server 2" />
      </ListItem>
      <ListItem button onClick={handleExpand}>
        <ListItemText primary="Server 3" />
        {expand ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Topic 1" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Topic 2" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Topic 3" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Topic 4" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
