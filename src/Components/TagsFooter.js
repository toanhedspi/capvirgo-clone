import React from 'react';
import {
  Container,
  Typography,
  Chip
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  tagsFooterContainer: {
    borderTop: "1px solid black",
    padding: "15px 0 20px 0"
  },
  tagsFooterTitle: {
    fontSize: "15px",
    fontWeight: 400,
    color: "#fff",
    margin: "0 0 10px 10px",
    lineHeight: "25px",
    textAlign: "left"
  },
  tagsFooterTagCloud: {
    display: "flex"
  },
  // Override classes
  containerLgOverride: {
    maxWidth: "1170px"
  },
  chipRootOverride: {
    margin: "0 2px 4px",
    padding: "0 7px",
    height: "25px",
    backgroundColor: "rgba(0,0,0,.2)",
    color: "#acacac",
    fontSize: "14px",
  }
});

function TagsFooter(props) {
  const { classes } = props;

  return (
    <Container className={classes.tagsFooterContainer} classes={{ maxWidthLg: classes.containerLgOverride }}>
      <Typography
        variant="h6"
        className={classes.tagsFooterTitle}
      >
        TÌM KIẾM NHIỀU NHẤT
      </Typography>
      <div className={classes.tagsFooterTagCloud}>
        <Chip label="adidas" variant="default" classes={{root: classes.chipRootOverride}}/>
        <Chip label="air jordan 1" variant="default" classes={{root: classes.chipRootOverride}}/>
      </div>
    </Container>
  )
}

export default withStyles(styles)(TagsFooter);