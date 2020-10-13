import React, { useState, useEffect } from 'react';

import { withStyles } from "@material-ui/core/styles";
import InfoFooter from "./InfoFooter";
import TagsFooter from "./TagsFooter";
import CopyRightFooter from "./CopyRightFooter";

const styles = (theme) => ({
  footerRoot: {
    padding: "30px 0 0",
    backgroundColor: "#2D2D2D",
    color: "#acacac"
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <footer className={classes.footerRoot}>
      <InfoFooter/>
      <TagsFooter/>
      <CopyRightFooter/>
    </footer>
  )
}

export default withStyles(styles)(Footer);