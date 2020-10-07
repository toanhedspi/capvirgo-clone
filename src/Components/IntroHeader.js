import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Button,
  Container,
  Grid,
} from "@material-ui/core";

import PhoneIcon from '@material-ui/icons/Phone';
import { withStyles } from "@material-ui/core/styles";
import {
  BUTTON_TITLES,
  INTRODUCTION_PAGE_INFO,
  CONTACT_NUMBER_INFO,
  SHOPPING_TIME_INFO,
} from "../Constants/AppConstants";

const styles = theme => ({
  menuContainer: {
    backgroundColor: "#9E9E9E",
    fontSize: "14px",
    fontFamily: "Tahoma, Ariel, sans-serif"
  },
  menuContentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuLeftItem: {

  },
  menuMidItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "2px 0"
  },
  menuMidPhoneIcon: {
    position: "relative",
    left: "-142px",
    border: "2px solid #fff",
    background: "#466082",
    borderRadius: "50%",
    width: "24px",
    height: "24px"
  },
  menuMidItem1: {
    position: "relative",
    border: "2px solid #fff",
    background: "#466082",
    borderLeft: "0",
    borderTopRightRadius: "20px",
    MozBorderTopRightRadius: "20px",
    WebkitBorderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    MozBorderBottomRightRadius: "20px",
    WebkitBorderBottomRightRadius: "20px",
    padding: "0 20px",
    height: "22px",
    lineHeight: "23px",
    fontWeight: 700,
  },
  menuRightItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  menuRightButtonGroupItem: {
    marginLeft: "20px"
  },
  menuRightButtonItem: {
    color: "#FFF",
    textTransform: "none",
    fontFamily: "inherit"
  },
  // Override classes
  containerLgOverride: {
    maxWidth: "1170px"
  },
});

function IntroHeader(props) {
  const { classes } = props;

  return (
    <AppBar position="static" className={classes.menuContainer} elevation={0}>
      <Container classes={{ maxWidthLg: classes.containerLgOverride }}>
        <Grid item sm={12} xs={12} className={classes.menuContentContainer}>
          <div className={classes.menuLeftItem}>
            {INTRODUCTION_PAGE_INFO}
          </div>
          <div className={classes.menuMidItem}>
            <div className={classes.menuMidItem1}>
              {CONTACT_NUMBER_INFO}
            </div>
            <PhoneIcon className={classes.menuMidPhoneIcon} />

          </div>
          <div className={classes.menuRightItem}>
            <span>{SHOPPING_TIME_INFO}</span>
            <div className={classes.menuRightButtonGroupItem}>
              <Button className={classes.menuRightButtonItem}>{BUTTON_TITLES.SIGN_IN_BUTTON_TITLE}</Button>
              <Button className={classes.menuRightButtonItem}>{BUTTON_TITLES.SIGN_UP_BUTTON_TITLE}</Button>
            </div>
          </div>
        </Grid>
      </Container>
    </AppBar>
  )
}

export default withStyles(styles)(IntroHeader);