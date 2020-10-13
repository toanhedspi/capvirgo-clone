import React from 'react';
import {
  Container,
  Typography
} from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  copyRightFooterContainer: {
    borderTop: "1px solid black",
    padding: "15px 0"
  },
  copyRightFooterContent: {
    fontSize: "14px",
    fontWeight: 400,
    color: "#acacac",
    marginLeft: "10px",
    lineHeight: "22px",
    textAlign: "left"
  },
  copyRightFooterTagCloud: {
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

function CopyRightFooter(props) {
  const { classes } = props;

  return (
    <Container className={classes.copyRightFooterContainer} classes={{ maxWidthLg: classes.containerLgOverride }}>
      <Typography
        variant="body1"
        className={classes.copyRightFooterContent}
      >
        Copyright © 2017 Capvirgo.com - All Rights Reserved.
      </Typography>
    </Container>
  )
}

export default withStyles(styles)(CopyRightFooter);