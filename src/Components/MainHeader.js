import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Button,
  Container,
  Grid,
  Input,
  IconButton,
  Typography,
} from "@material-ui/core";

import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { withStyles } from "@material-ui/core/styles";
import {
  BUTTON_TITLES,
  PRODUCT_TITLES,
  NEWS_LIST
} from "../Constants/AppConstants";

const styles = theme => ({
  menuContainer: {
    backgroundColor: "#FFF",
    padding: "15px 0",
  },
  menuContentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuContentLeftContainer: {
    display: "flex",
    alignItems: "center",
  },
  menuLogoContainer: {
    display: "inline-block",
    margin: 0
  },
  menuLogoImg: {
    maxHeight: "50px"
  },
  menuFormSearchContainer: {

  },
  menuSearchBar: {
    width: "350px",
    height: "36px",
    boxShadow: "none",
    border: "1px solid #ccc",
    borderRightWidth: 0,
    padding: "5px 10px",
    marginLeft: "100px",
    fontSize: "14px"
  },
  menuSearchButton: {
    backgroundColor: "#466082",
    boxShadow: "none",
    borderRadius: 0,
    color: "#FFF",
    textTransform: "none",
  },
  menuShoppingBasketButton: {
    "&:hover": {
      backgroundColor: "inherit",
      color: "#466082"
    }
  },
  menuShoppingBasketTitles: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: "10px"
  },
  menuShoppingBasketTitle1: {
    textTransform: "uppercase",
    color: "#333333",
    fontSize: "14px",
    fontFamily: `Tahoma, Arial, sans-serif`
  },
  menuShoppingBasketTitle2: {
    color: "#999",
    fontSize: "11.9px",
    fontFamily: `Tahoma, Arial, sans-serif`
  },

  // Override classes
  containerLgOverride: {
    maxWidth: "1170px"
  }
})

function MainHeader(props) {
  const { classes } = props;

  return (
    <AppBar position="static" className={classes.menuContainer} elevation={0}>
      <Container classes={{ maxWidthLg: classes.containerLgOverride }}>
        <Grid item sm={12} xs={12} className={classes.menuContentContainer}>
          <div className={classes.menuContentLeftContainer}>
            <h2 className={classes.menuLogoContainer}>
              <a href="https://capvirgo.com/" title="Trùm giày thể thao capvirgo">
                <img
                  src="https://capvirgo.com/wp-content/uploads/2017/11/logo-3.png"
                  alt="Trùm giày thể thao Capvirgo.com"
                  className={classes.menuLogoImg}
                  data-ll-status="loaded"
                />
                <noscript>
                  <img src="https://capvirgo.com/wp-content/uploads/2017/11/logo-3.png" alt="Trùm giày thể thao Capvirgo.com" />
                </noscript>
              </a>
            </h2>
            <form role="search" method="get" className={classes.menuFormSearchContainer} action="https://capvirgo.com/">
              <Input
                placeholder="Tìm kiếm sản phẩm"
                inputProps={{ 'aria-label': 'description' }}
                disableUnderline={true}
                className={classes.menuSearchBar}
              />
              <Button
                type="submit"
                variant="contained"
                className={classes.menuSearchButton}>
                {BUTTON_TITLES.SEARCH_BUTTON_TITLE}
            </Button>
            </form>
          </div>
          <IconButton
            aria-label="gio-hang"
            className={classes.menuShoppingBasketButton}
          >
            <ShoppingBasketIcon />
            <div className={classes.menuShoppingBasketTitles}>
              <Typography
                variant="body1"
                className={classes.menuShoppingBasketTitle1}
              >
                {BUTTON_TITLES.SHOPPING_BASKET_TITLE}
            </Typography>
              <Typography
                variant="body1"
                className={classes.menuShoppingBasketTitle2}
              >
                Chưa có sản phẩm
            </Typography>
            </div>
          </IconButton>
        </Grid>
      </Container>
    </AppBar>
  )
}

export default withStyles(styles)(MainHeader);