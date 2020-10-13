import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  FooterList_title: {
    fontSize: "15px",
    fontWeight: 400,
    color: "#fff",
    margin: "0 0 10px 10px",
    lineHeight: "25px",
    textAlign: "left"
  },
  FooterList_listItem: {
    color: "#acacac",
    padding: 0
  },
  FooterList_listItemIcon: {
    color: "#acacac"
  },
  FooterList_listItemAnchor: {
    color: "#acacac",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    }
  },
  MuiList___noPaddingLeft: {
    paddingLeft: 0
  },
  MuiListItemIcon___changeMinWidth: {
    minWidth: "25px"
  }
});

function FooterList(props) {
  const { 
    classes,
    title,
    list
  } = props;

  return (
    <>
      <Typography
        variant="h6"
        className={classes.FooterList_title}
      >
        {title}
      </Typography>
      <List dense={true} className={{ padding: classes.MuiList___noPaddingLeft }}>
        {list.map(item => (
          <ListItem
            disableGutters={true}
            className={classes.FooterList_listItem}
          >
            <ListItemIcon classes={{ root: classes.MuiListItemIcon___changeMinWidth }} className={classes.FooterList_listItemIcon}>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText
              primary={<a className={classes.FooterList_listItemAnchor} href={item.href}>{item.content}</a>}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default withStyles(styles)(FooterList);